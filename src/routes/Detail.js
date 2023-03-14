import React from "react";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function Detail(){
    const [book, setBook] = useState([]);

    const {id} = useParams();
    const {searchVal} = useParams();

    const getBook = async() =>{
        const ID_KEY = 'Q82u3zXfLQGozGSF5bK1';
        const SECRET_KEY = 'QS_hNtmNYv';
        try {
          if( id === ""){
            setBook([]);
  
          }else{
  
            const {data : {
              items
            }} = await axios.get('/api/v1//search/book_adv.json',{
              params : {
                d_isbn : id,
                display:10
              },
              headers: {
                'X-Naver-Client-Id': ID_KEY,
                'X-Naver-Client-Secret': SECRET_KEY
              }
            });
            setBook(items);
            console.log(items);
          }
        } catch(error){
          console.log(error);
        }
      };
     
      useEffect(()=>{
        getBook();
      },[])
  
    return (
        <React.Fragment>
            <div id="detalLayer">
                <div className="con">
                    {book.map((book,index)=>(
                        <div key={index}>
                            <img src={book.image} alt="" />
                            <p>{book.title}</p>
                            <p>{book.author}</p>
                            <p>{book.publisher}</p>
                            <p>{book.pubdate}</p>
                            <p>{book.description}</p>
                        </div>
                    ))}
                    <button><Link to={`/${searchVal}`}>홈으로</Link></button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Detail;