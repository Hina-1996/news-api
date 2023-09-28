import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spin from './Spin';
import LoadingBar from 'react-top-loading-bar'
export default function New(props) {
  const [progress,setprogress]=useState(10);
  const [state, setstate] = useState({
    articles: [],
    loading: false,
    page: 1,
    button: true,
    totalResults: 0
  });
  console.log(state.page);
  useEffect(() => {
    fetchData(state.page);
  }, []);
  let fetchData = async (page) => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=caf49dfef9ea4e8085b56f0d9f14db4d&page=${state.page }&pagesize=20`;
    setprogress(30)
    setstate((prev) => {
      return {
        ...prev,
        loading: prev.loading = true,
      }
    })
    setprogress(70)
    const response = await fetch(url);
    const data = await response.json();
    console.log("your api data is" + data);
    setstate({
      articles: data.articles,
      page: page,
      totalResults: data.totalResults,
      loading: false,
      button: true
    });
    setprogress(100)
  }
  // useEffect(() => {
  //   fetchPageData(state.page)
  // }, [state.page])

  // let fetchPageData = async (page) => {
  //   let url = `https://newsapi.org/v2/everything?q=apple&from=2023-09-08&to=2023-09-08&sortBy=popularity&apiKey=78f5e14adfd748f1bb33b2d50183ac5c&page=${page}&pagesize=20`;
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log("your api data is" + data);
  //   setstate({
  //     articles:data.articles,
  //     page: page
  //   });
  // }
  // let handlepreclick= ()=>{
  //   setstate((prev) => {
  //     return {
  //       ...prev,
  //       page: prev.page - 1
  //     }
  //   })
  // }
  let fetchMoreData=async ()=>{
    setstate((prev) => {
      return {
        ...prev,
        page:prev.page +1
      }
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=caf49dfef9ea4e8085b56f0d9f14db4d&page=${state.page +1 }&pagesize=20`;
    setstate((prev) => {
      return {
        ...prev,
        loading: prev.loading = true,
      }
    })
    const response = await fetch(url);
    const data = await response.json();
    setstate((prev) => {
      return {
        ...prev,
        articles:state.articles.concat(data.articles)
      }
    })
    console.log("page=" + state.page)
  }
  // let fetchMoreData = async (page) => {
  //   setstate((prev) => {
  //     return {
  //       ...prev,
  //       page: prev.page + 1,
  //     }
  //   })
  //   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d799d0ef3b5844519e09f45ce1f19496&page=${state.page }&pagesize=20`;
  //   setstate((prev) => {
  //     return {
  //       ...prev,
  //       loading: prev.loading = true,
  //     }
  //   })
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setstate({
  //     page: page,
  //     articles: state.articles.concat(data.articles),
  //     totalResults: data.totalResults,
  //     loading: false,
  //     // button: true
  //   });
    
  //   console.log("Page=" + state.page)
  // }
  return (<><LoadingBar
    color='#f11946'
    progress={progress}
  />
    <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ textAlign: 'center', margin: '89px 0px 10px 0px' }}>Top Headlines</h1>
    {console.log("length" +state.articles.length + "totalresults" + state.totalResults)}
   {/* {state.loading && <Spin />} */ }
    <InfiniteScroll
      dataLength={state.articles.length}
      next={fetchMoreData} 
      // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top. 
      // hasMore={state.articles.length!= state.totalResults}
      hasMore={state.articles.length >= state.totalResults? false : true}
      loader={<Spin />}
>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {state.articles.map((element) => {
            return <div key={element.url}>
              <Newsitem title={element.title ? element.title.slice(0, 45) : ""} desc={element.description ? element.description.slice(0, 105) + "..." : "No description"} img={element.urlToImage} urlnew={element.url} author={element.author} date={new Date(element.publishedAt).toGMTString()} source={element.source.name} />
            </div>
          })}
        </div></InfiniteScroll>
    {/* <div className="d-flex justify-content-between">
     {state.button &&<button type="button" disabled={state.page<=1} id="button"className="btn btn-dark" onClick={handlepreclick}>&larr; Previous</button>}
      {state.button &&<button type="button" id="nextBtn" className="btn btn-dark" onClick={handlenextclick}>Next &#8594;</button>}
      </div> */ }
   </>
  );
}

