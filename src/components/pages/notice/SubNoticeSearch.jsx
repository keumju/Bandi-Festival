import { useState, useContext } from "react";
import { editContext } from "./SubNoticeFAQ";

export default function SubNoticeSearch(){
    
    const {searchWord} = useContext(editContext);
    const [search, setSearch] = useState('');
    function searchChange(e){
        setSearch(e.target.value)
    }
    function searchBtn(){
        searchWord(search)
    }
    return <>
        <div className="noticeSearch">
            <h1>원하시는 내용을 검색해 보세요.</h1>
            <div className="noticeSearchBar">
                <input type="text" placeholder="검색어를 입력해 주세요." value={search} onChange={searchChange}/>
                <button onClick={searchBtn}><img src="/bandifesta/assets/glass_search.png"/></button>
            </div>
        </div>
    </>
}