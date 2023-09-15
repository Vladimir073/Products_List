import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SApp, SHeader } from './assets/styles/app.styles';
import { ProductListContainer } from './components/product/list/product-list.container';
import { ProductDetails } from './components/product/cardDetails/product-cardDetails.component';

function App() {
    return (
        <BrowserRouter>
            <SApp>
                <SHeader>
                    <Routes>
                        <Route path='/Products_List' element={<ProductListContainer />} />
                        <Route path='/Products_List/:id' element={<ProductDetails />} />
                    </Routes>
                </SHeader>
            </SApp>
        </BrowserRouter>
    );
}

export default App;
