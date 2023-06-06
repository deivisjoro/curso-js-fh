import usersStore from '../../store/users.store';
import { renderTable } from '../render-table/render-table';
import './render-buttons.css';
import loadingIcon from '/images/loading_icon.gif';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButtons = ( element )=>{

    const nextButton = document.createElement('button');
    nextButton.textContent = ' Next > ';

    const prevButton = document.createElement('button');
    prevButton.textContent = ' < Prev ';

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page';
    currentPageLabel.textContent = usersStore.getCurrentPage();
    
    const paginatorContainer = document.createElement('div');
    paginatorContainer.classList.add('paginator-container');
    
    paginatorContainer.append( prevButton, currentPageLabel, nextButton );
    element.append( paginatorContainer );
    
    const loadingContainer = document.createElement('div');
    element.append( loadingContainer );

    const showLoading = ()=>{
        loadingContainer.innerHTML = `
            <div class="text-center">
                <img class="loading-img" src="${loadingIcon}" alt="loading img">
            </div>
            <div>Loading...</div>
        `;
    }

    const hideLoading = ()=>{
        loadingContainer.innerHTML = '';    
    }

    const sleep = ()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve();
            }, 200);
        })
    }

    nextButton.addEventListener('click', async()=>{
        showLoading();
        await sleep(); //simular tiempo
        await usersStore.loadNextPage();
        currentPageLabel.textContent = usersStore.getCurrentPage();
        renderTable(element);
        hideLoading();
    });

    prevButton.addEventListener('click', async()=>{
        showLoading();
        await sleep();
        await usersStore.loadPrevPage();
        currentPageLabel.textContent = usersStore.getCurrentPage();
        renderTable(element);
        hideLoading();
    });

    
}