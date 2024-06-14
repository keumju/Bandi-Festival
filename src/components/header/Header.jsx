import { Link } from 'react-router-dom';
import './header.css';
import './mymenu.css';
import { useContext, useEffect, useRef, useState } from 'react';
import { loginRequest } from "/src/api_utils/loginUtil"
import GenericIconButton from '../generic/GenericIconButton';
import { configContext } from '../../App';

function LanguageSelector({handleConfig}) {
	const [visible,setVisible] = useState(false);
	const [displayValue,setDisplayValue] = useState('');
	const config = useContext(configContext);
	const containerRef = useRef(null)
	useEffect(()=>{
		let val = ''
		switch(config.language) {
		case 'Kor':
			val = '한국어';
			break;
		case 'Eng' :
			val = 'English';
			break;
		case 'Jpn' :
			val = '日本語';
			break;
		}
		setDisplayValue(val);
	},[config.language])
	useEffect(()=>{
		setVisible(false);
	},[displayValue])
	//바깥 클릭 시 소멸
	useEffect(()=>{
		const clickCallback = (e)=>{
			if (e.button!==0) {return;}
			if (!visible) {return;}
			if (e.target!==containerRef.current&&!(containerRef.current.contains(e.target))){
				setVisible(false);
			}
		}

		window.addEventListener('mousedown',clickCallback);

		return ()=>{
			window.removeEventListener('mousedown',clickCallback);
		}
	},[visible])
	return <div ref={containerRef} className='languageSelector'>
		<div className='contentAndArrow' onClick={()=>{setVisible(!visible)}}>
			<div className='content fontMain'>
				{displayValue}
			</div>
			<div className={`arrow${visible?' active':''}`}>

			</div>
		</div>
		{
			visible
			?<div className='dropDown'>
				<div className={`dropDownItem fontMain${displayValue==='한국어'?' active':''}`} onClick={()=>{
					handleConfig.setLanguage('Kor');
				}}>
					한국어
				</div>
				<div className={`dropDownItem fontMain${displayValue==='English'?' active':''}`} onClick={()=>{
					handleConfig.setLanguage('Eng');
				}}>
					English
				</div>
				<div className={`dropDownItem fontMain${displayValue==='日本語'?' active':''}`} onClick={()=>{
					handleConfig.setLanguage('Jpn');
				}}>
					日本語
				</div>
			</div>
			:<></>
		}
	</div>
}

function MyMenu({handleConfig}) {
	const [visible,setVisible] = useState(false);
	const config = useContext(configContext);
	const handleVisible = {
		toggle:()=>{
			setVisible(!visible);
		},
		hide:()=>{
			setVisible(false);
		}
	}
	//로그아웃
	const logoutCallback = ()=>{
		handleConfig.logout();
	}
	//언링크
	const unlinkCallback = ()=>{
		handleConfig.unlink();
	}
	return <>
		<div className='myMenuButton' onClick={handleVisible.toggle}>
			{(config.user&&config.user.thumbnail)?<img src={String(config.user.thumbnail).replace('http://','https://')}/>:<></>}
		</div>
		<div className={`myMenuContainerWrapper${visible?' active':''}`}>
			<div className='myMenuContainer'>
				{config.user===null
					?<>
						{/* 유저데이터 없음 */}
						<div className='header'>
							<div className='title fontSubTitle'>
								로그인
							</div>
							<div className='close' onClick={handleVisible.hide}>
							</div>
						</div>
						<div className='text fontMain'>
							더 나은 서비스를 위해<br/>로그인 해주시기 바랍니다.
						</div>
						<GenericIconButton className='kakao' src="/bandifesta/assets/kakao.png" onClick={loginRequest}>
							카카오로 로그인
						</GenericIconButton>
					</>
					:<>
						{/* 유저데이터 있음 */}
						<div className='header'>
							<div className='title fontSubTitle'>
								계정
							</div>
							<div className='close' onClick={handleVisible.hide}>
							</div>
						</div>
						{/* 마이&페이버릿 */}
						<div className='serviceNav'>
							<Link to={'/my/info'} onClick={handleVisible.hide}>
								<div className='serviceNavItem'>
									<img className='icon' src="/bandifesta/assets/user2.png" alt='회원 정보'/>
									<div className='title fontMain'>회원 정보</div>
									<div className='arrow'></div>
								</div>
							</Link>
							<Link to={'/my/favorites'} onClick={handleVisible.hide}>
								<div className='serviceNavItem'>
									<img className='icon' src="/bandifesta/assets/heartFill.png" alt='찜한 목록'/>
									<div className='title fontMain'>찜한 목록</div>
									<div className='arrow'></div>
								</div>
							</Link>
							<Link to={'/my/qna'} onClick={handleVisible.hide}>
								<div className='serviceNavItem'>
									<img className='icon' src="/bandifesta/assets/question2.png" alt='1:1 문의'/>
									<div className='title fontMain'>1:1 문의</div>
									<div className='arrow'></div>
								</div>
							</Link>
						</div>
					</>
				}
				{/* 서비스 내비 */}
				<div className='header'>
					<div className='title fontSubTitle'>
						서비스
					</div>
				</div>
				<div className='serviceNav'>
					<Link to={'/intro/main'} onClick={handleVisible.hide}>
						<div className='serviceNavItem'>
							<img className='icon' src="/bandifesta/assets/ballon.png" alt='경복궁별빛야행'/>
							<div className='title fontMain'>경복궁별빛야행</div>
							<div className='arrow'></div>
						</div>
					</Link>
					<Link to={'/course'} onClick={handleVisible.hide}>
						<div className='serviceNavItem'>
							<img className='icon' src="/bandifesta/assets/shoes.png" alt='경복궁나들이'/>
							<div className='title fontMain'>경복궁나들이</div>
							<div className='arrow'></div>
						</div>
					</Link>
					<Link to={'/notice/main'} onClick={handleVisible.hide}>
						<div className='serviceNavItem'>
							<img className='icon' src="/bandifesta/assets/notice.png" alt='알려드립니다'/>
							<div className='title fontMain'>알려드립니다</div>
							<div className='arrow'></div>
						</div>
					</Link>
					<Link to={'/festival/gallery'} onClick={handleVisible.hide}>
						<div className='serviceNavItem'>
							<img className='icon' src="/bandifesta/assets/location.png" alt='축제둘러보기'/>
							<div className='title fontMain'>축제둘러보기</div>
							<div className='arrow'></div>
						</div>
					</Link>
				</div>
				{
					config.user===null
					?<></>
					:<div className='logoutContainer'>
						<div className='logout' onClick={logoutCallback}>
							로그아웃
						</div>
					</div>
				}
			</div>
		</div>
	</> 
}

export default function Header({handleConfig}) {
	return <header>
		{/* <div className={'innerbox'}> */}
			<Link to={'/main'}>
				<div className='headerLogo'>
					<img src='/bandifesta/assets/logo1.png' alt='대한민국 밤산책 로고'/>
				</div>
			</Link>
			<div className='headerMiddleNav'>
				<Link 
					className={'navItem fontSubTitle'} 
					to={'/intro/main'}>
					경복궁별빛야행
				</Link>
				<Link 
					className={'navItem fontSubTitle'} 
					to={'/course'}>
					경복궁나들이
				</Link>
				<Link 
					className={'navItem fontSubTitle'} 
					to={'/notice/main'}>
					알려드립니다
				</Link>
				<Link 
					className={'navItem fontSubTitle active'} 
					to={'/festival/gallery'}>
					축제둘러보기
				</Link>
			</div>
			<div className='headerContext'>
				<LanguageSelector handleConfig={handleConfig}/>
				<MyMenu handleConfig={handleConfig}/>
			</div>
		{/* </div> */}
	</header>
}