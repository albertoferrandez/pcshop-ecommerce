import { useState, useEffect } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import supabase from "../bd/conecttobd";


const FormSearch = () => {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {
        const getProducts = async () => {
            const { data, error } = await supabase
                .from('products')
                .select()
            if (error) {
                console.log(error)
            }
            if (data) {
                setProducts(data)
            }
        }
        getProducts();
    }, [])

    return (
        <div className="search-bar">
            <div className="search-field">
                <form>
                    <input type="text" placeholder="Busca tu producto" onChange={(e) => setSearch(e.target.value)} />

                    <button className='button-form'>
                        <AiOutlineSearch size={15} />
                    </button>
                </form>
            </div>
            <div className="list-search">
                <ul>
                    {
                        search === '' ? '' : products.filter(prod => prod.productName
                            .toLowerCase().includes(search)).map((p) => (
                                <li key={p.id}>{p.productName}</li>
                            )
                            )
                    }
                </ul>
            </div>
        </div>
    )
}

export default FormSearch