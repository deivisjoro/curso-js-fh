import './style.css';
import { AppComponent } from './src/todos/components/app.component';
import todoStore from './src/store/todo.store';

todoStore.initStore();
AppComponent('#app');
