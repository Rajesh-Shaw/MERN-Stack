import'./App.css';
import Bye from './Bye';

function Hello()
{
    const name = "Rajesh";
    const headingStyle ={
        color : "red",
        textAlign : "center",
        backgroundColor : "pink",
        fontSize : "60px"
    };

    return(
        <>
            <h2 style={headingStyle}>Hello {name} </h2>
            
            <p style={ {color:"brown", textAlign: "center"} }> *Inline CSS*  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ratione enim deserunt exercitationem, illum rerum, voluptatem in, ipsum pariatur sequi nulla delectus voluptates cupiditate. Quibusdam ut, molestiae reprehenderit vero fugiat tempore doloremque explicabo? Illo deserunt atque quam, amet nemo debitis iusto, laboriosam provident doloribus minima vel veniam necessitatibus harum incidunt.</p>

            <p className='test'>*External CSS* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique inventore, qui consequatur molestias itaque blanditiis error, est optio accusantium aspernatur accusamus asperiores exercitationem facere laboriosam deserunt. Optio, ut voluptatem eaque, voluptatum obcaecati rem quia nihil in atque, harum odit alias mollitia. Possimus, numquam? Quis debitis dignissimos magni saepe velit nam ipsam enim maiores ab! Modi neque iure laborum autem amet a soluta officiis facere ducimus veritatis tempora voluptates, alias vero?</p>

            <Bye />

        </>
    );
}
export default Hello;