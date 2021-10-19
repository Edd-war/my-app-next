import Layout from "../../components/Layout";

export default function index({data}) {
    return (
        <Layout>
            <h1>GIPHY</h1>
            {
                data.map(({id, title, import_datetime, trending_datetime, images})=>(
                    <>
                        <div key={id}>
                            <div>
                                <img src={images.original.url} alt=""  width="200px" height="200px"/>
                                <h4>{title}</h4>
                                <p>fecha debut: {import_datetime}</p>
                                <p>fecha de salida: {trending_datetime}</p>
                            </div>
                        </div>
                    </>
                ))
            }
        </Layout>
    )
}

export async function getStaticProps(){
    try{
        const res = await fetch("https://api.giphy.com/v1/gifs/trending?api_key=aWooOtuhBH2kzjUy47ms0dKutHz8rTu8&limit=25&rating=g");
        const data = await res.json();
        return{
            props:{
                data: data['data']
            }
        }
    }
    catch{
        console.log(error);
    }
}