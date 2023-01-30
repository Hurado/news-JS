import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    news: any[] | undefined;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sourcesElement = document.querySelector('.sources');
        if (!sourcesElement) return;

        sourcesElement.addEventListener('click', (e) =>
            this.controller.getNews(e, (data:object) => this.view.drawNews(data))
        );
        this.controller.getSources((data:object) => this.view.drawSources(data));
    }
}

export default App;
