import { BrowserRouter } from 'react-router-dom';
import { SApp, SHeader } from './assets/styles/app.styles';
import { ProductListContainer } from './components/product/list/product-list.container';

function App() {
    return (
        <BrowserRouter>
            <SApp>
                <SHeader>
                    <ProductListContainer />
                </SHeader>
            </SApp>
        </BrowserRouter>
    );
}

export default App;
