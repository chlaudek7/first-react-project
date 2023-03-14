import React from "react";
import Loading from "../components/Loading";
import Movie from "../components/Movie";
import Head from "../routes/Head";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function Home(){
    const [loading,setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [books, setBook] = useState([]);
    const {searchVal} = useParams();
    const searchBook =(event)=>{
      setSearch(event.target.value);

    };
    const clickBtn =()=>{
      getBook();

    };

    const getBook = async() =>{
      const ID_KEY = 'Q82u3zXfLQGozGSF5bK1';
      const SECRET_KEY = 'QS_hNtmNYv';
      try {
        if(search === ""){
          setBook([]);

        }else{

          const {data : {
            items
          }} = await axios.get('/api/v1//search/book.json',{
            params : {
              query : search,
              display:10,
              start:1,
              sort:"sim",
            },
            headers: {
              'X-Naver-Client-Id': ID_KEY,
              'X-Naver-Client-Secret': SECRET_KEY
            }
          });
          setBook(items);
          setLoading(false);
          // console.log(items);
        }
      } catch(error){
        console.log(error);
      }
    };
   
    useEffect(()=>{
      // if(searchVal!=""){
      //   setSearch(searchVal);
      //   console.log(search);
      // }

      getBook();
  
    },[])
    return (
        <React.Fragment>
            <Head/>
            {loading ? (<Loading/>) : (
               <div id="homeLayer">
                    <div className="homeWrap">
                        <p className="movieLineTit">도서검색</p>
                        <input type="text" onChange={searchBook} value={search} />
                        <button type="button" onClick={clickBtn}>검색</button>
                        <ul className="bookList">
                          {books.map((book, index) => (<Movie key={index}   coverImg={book.image} title={book.title} description={book.description} author={book.author} isbn={book.isbn} search={search} />
                        ))}
                        </ul>
                    </div>

               </div>

            )}
        </React.Fragment>
    )
}

export default Home;