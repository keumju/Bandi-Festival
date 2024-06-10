import './festivaldatepicker.css';
import { useEffect, useMemo, useState } from "react"

export default function FestivalDatePicker({value,onChange}) {
	const [targetDate,setTargetDate] = useState(value
		?new Date(value.getFullYear(),value.getMonth(),value.getDate())
		:new Date()
	);
	//타겟 년,월
	const [targetYear,targetMonth] = useMemo(()=>{
		return [targetDate.getFullYear(),targetDate.getMonth()];
	},[targetDate])
	//요일오프셋
	const weekdayOffset = useMemo(()=>{
		return new Date(targetYear,targetMonth,1).getDay();
	},[targetMonth])
	//day배열(맵으로 뿌릴거)
	const days = useMemo(()=>{
		return new Array(42).fill('').map((temp,index)=>{
			let now = new Date();
			let newDate = new Date(targetYear,targetMonth,(index+1)-weekdayOffset)
			return {
				display:newDate.getDate(),
				dateValue:newDate,
				today:newDate.getFullYear()===now.getFullYear()
					&&newDate.getMonth()===now.getMonth()
					&&newDate.getDate()===now.getDate(),
				inMonth:targetMonth===newDate.getMonth()
			};
		})
	},[weekdayOffset])
	//외부 onChange
	useEffect(()=>{
		if(onChange) {
			onChange(targetDate);
		}
	},[targetDate])
	//return JSX
	return <>
		<div className={`festivalDatePicker shadowBox`}>
			<div className="top">
				<div className="left">
					{/* 연,월 디스플레이 */}
					<div className='fontMain'>
						축제일정
					</div>
					<div className='yearAndMonth fontSubTitle'>
						{targetDate.getFullYear()}.{targetDate.getMonth()+1}
					</div>
				</div>
				<div className="right">
					{/*연,월 페이징 버튼*/}
					<div className="btn previous" onClick={()=>{setTargetDate(
						new Date(targetDate.getFullYear(),targetDate.getMonth()-1,1)
					)}}>
					</div>
					<div className="btn next"></div>
				</div>
			</div>
			<div className="bottom">
				{/* 요일 */}
				<div className="dayColumns">
					<div className="dayColumn fontMain red">일</div>
					<div className="dayColumn fontMain">월</div>
					<div className="dayColumn fontMain">화</div>
					<div className="dayColumn fontMain">수</div>
					<div className="dayColumn fontMain">목</div>
					<div className="dayColumn fontMain">금</div>
					<div className="dayColumn fontMain blue">토</div>
				</div>
				{/* 날짜 위젯들 */}
				<div className='days'>
					{/* 날짜위젯 뿌리기 */}
					{days.map((day,index)=>{
						return <div key={index} 
							className={`day fontMain ${
									String(day.dateValue)===String(targetDate)
									?'active'
									:''
								} ${
									day.today?'today':''
								} ${
									day.inMonth?'inMonth':''
								} ${
									day.dateValue.getDay()===0?'red':''
								} ${
									day.dateValue.getDay()===6?'blue':''
								}`
							} 
							onClick={
								()=>{setTargetDate(day.dateValue);}
							}
						>
							{day.display}
						</div>
					})}
				</div>
			</div>
		</div>
	</>
}