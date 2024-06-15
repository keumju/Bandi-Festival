import { useState, useContext, useEffect } from 'react';
import { memoContext } from '../my/SubMyQNA';
import GenericButton from '../../generic/GenericButton'

export default function PageQNAEdit({setPage, click}) {
	const {editWord} = useContext(memoContext);

	const [editTitle, setEditTitle] = useState(click.title);
	const [editCont, setEditCont] = useState(click.text);
	
	// 수정
    function editChangeTit(e){
        setEditTitle(e.target.value)
    }
    function editChangeTxt(e){
        setEditCont(e.target.value)
    }

	// 저장 버튼
    function saveBtn(){
        if(window.confirm(`문의 내용을 수정하시겠습니까?`)){
			editWord(click.idx, editTitle, editCont)
			setPage('detail')
		}
    }
	// 취소 버튼
	function cancelBtn(){
		if(window.confirm('문의 내용 수정을 취소하시겠습니까?')){
			setPage('list')
		}
	}
	return <>
		<ul className="MyQNADetail">
			<li className="MyQNADetailTit">
				<input type='text' placeholder={click.title} value={editTitle} onChange={editChangeTit}/>
			</li>
			<li className="MyQNADetailUser">
				<div>작성자</div>
				<input type='text' placeholder={click.userID} readOnly />
			</li>
			<li className="MyQNADetailUser">
				<div>작성일</div>
				<input type='text' placeholder={click.time} readOnly/>
			</li>
			<li className="MyQNADetailCont">
				<textarea placeholder={click.text} value={editCont} onChange={editChangeTxt}></textarea>
			</li>
		</ul>
		<div className="MyQnaWriteBtn">
			<GenericButton onClick={saveBtn}>수정완료</GenericButton>
			<GenericButton onClick={cancelBtn}>수정취소</GenericButton>
		</div>
	</>
}