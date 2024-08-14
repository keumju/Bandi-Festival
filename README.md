# 대한민국 밤 산책<img src="https://github.com/user-attachments/assets/cee0d27a-44e8-4d1e-80c3-f35f8d3d18a7" align=left width=100>

> 경복궁 별빛야행 축제를 소개하는 사이트 💫

<br />

![대한민국밤산책](https://github.com/user-attachments/assets/314f8b7f-157d-492e-a0f3-0abc89b7ab4e)


- 배포 URL : https://thesandfox.github.io/bandifesta
- 프로젝트 기획서 : [반디페스타.pdf](https://github.com/user-attachments/files/16612303/default.pdf)
- 피그마 디자인 : https://ko.fm/4Pu

<br>
 
## 💭 프로젝트 소개

- 경복궁 별빛야행 축제를 소개하고 홍보하는 사이트입니다.
- 해당 축제 외에도 유사한 축제를 찾아 볼 수 있도록 제작하였습니다.
- Three.js 와 Blender를 사용해 더 생동감 있는 사이트를 제작하였습니다.

<br>

## ⭐️ Team Member - `팀 반딧불이`

|<img src="https://github.com/user-attachments/assets/e4f7babb-2f98-41ed-adce-158f8098669a" width=150>|<img src="https://github.com/user-attachments/assets/31c4e327-d44d-431a-aa5e-fe26def2d2a3" width=150>|<img src="https://github.com/user-attachments/assets/7b93cd9f-f560-4642-b2f3-bb9bdfc5fea5" width=150>|<img src="https://github.com/user-attachments/assets/7a183386-223a-438d-b7c6-bb86fd7b257c" width=150>|
|:--:|:--:|:--:|:--:|
|**전인탁**|**김금주**|**박채민**|**이기훈**|
|[@TheSandfox](https://github.com/TheSandfox)|[@keumju](https://github.com/keumju)|[@pcm5433](https://github.com/pcm5433)|[@gihoon85](https://github.com/gihoon85)|

#### 김금주 ✅
`자주하는 질문(FAQ)` `마이페이지(1:1 문의)` `마이페이지(1:1 문의 작성 및 수정 페이지)`

#### 전인탁
`메인(3D)` `Header` `축제둘러보기` `로그인 및 회원가입` `DB 통신용 백엔드 어플리케이션 제작`

#### 박채민
`공지사항` `공지사항 작성 및 수정 페이지` `마이페이지(회원정보)`

#### 이기훈
`메인 페이지` `Footer` `경복궁 별빛 야행` `경복궁 나들이`

<br>

## ⭐️ 프로젝트 설명
> 아래의 내용은 제가 진행한 내용만 작성하였습니다.

### 💭 프로젝트 기여도

- 기획 : 10%
- 디자인 : 50%
- 개발 : 25%

<br/>

## 1. 개발 기간 및 환경

### 개발 기간
- 전체 개발 기간 : 2024.05.15 ~ 2024.06.18

### 개발 환경
- 개발 도구 : Vite, HTML, CSS, React, JavaScript, Node.js, Three.js
- 협업 툴 : GitHub, Discord, Notion
- 디자인 툴 : Figma, Adobe Photoshop, Adobe Illustrator


<br>

## 2. 구현 기능

### [자주하는 질문(FAQ)]
- 검색 기능
  - 검색 내용 작성 후 클릭 뿐만 아니라 엔터키로도 검색 가능하게 제작하였습니다.
  - 검색 후 리스트의 개수가 줄어들며 페이지네이션의 수도 자동으로 변경되게 됩니다.

- 토글 기능 : 질문을 클릭했을때, 클릭한 id와 데이터의 id가 같을 경우 토글 기능이 실행되도록 제작하였습니다.

<img width="1259" alt="스크린샷 2024-08-15 오전 2 22 04" src="https://github.com/user-attachments/assets/855b1747-7e65-4cba-85fa-ad933f730c6c">

### [마이페이지(1:1 문의)]
> 마이페이지의 경우 백엔드 서버를 따로 연결해야 들어갈 수 있기 때문에 이미지로 대체합니다.

- 1:1 문의 페이지 메인
  - 문의 페이지의 경우 로그인한 아이디와 같은 아이디를 가진 문의 내역 데이터들만을 출력합니다.
  - 리스트를 클릭할 경우 상세 페이지로 이동하여 상세 내용 확인이 가능합니다.
  - 페이지네이션 컴포넌트로 10개씩 리스트가 출력 될 수 있도록 하였습니다.
  - 역순으로 리스트가 출력되어 새로운 리스트 추가시 상단에서 작성한 내역을 바로 볼 수 있도록 하였습니다.
 
- 1:1 문의 상세 페이지
  - 사용자의 사용성을 높이기 위해 목록 버튼을 추가하여 문의 페이지 메인으로 이동 할 수 있도록 제작하였습니다.
  - 수정, 삭제 버튼으로 각 항목의 수정 및 삭제가 가능합니다.

![원본 (1)](https://github.com/user-attachments/assets/1b434c0e-c311-4910-b851-980077b3d6eb)

- 1:1 문의 수정 페이지
  - 문의 수정 페이지에서는 기존에 작성했던 내용이 남아있고, 추가적으로 내용으로 수정/삭제하여 내용을 변경 할 수 있도록 제작하였습니다.
  - 수정 완료 및 취소 버튼을 누르면 알림이 나올 수 있도록 함수를 작성하였습니다.

![원본 (2)](https://github.com/user-attachments/assets/c7355232-8b1d-477e-a155-6438607356ba)

- 1:1 문의 작성 페이지
  - 메인의 글쓰기 버튼을 눌러 문의 작성이 가능합니다.
  - 작성 페이지에서 내용 작성 후 완료 버튼을 누르면 알림이 뜨게 되고 메인 리스트 페이지로 이동하게 됩니다.
  - 메인 페이지 이동 후 최상단에 새로운 문의 내역이 작성된 것을 확인 가능합니다.

![원본 (3)](https://github.com/user-attachments/assets/a86c2447-2ca9-4eb0-9580-5e9531ee08e1)

### [기타 제작]
- react-paginate 라이브러리를 사용하여 페이지네이션을 공용으로 사용 가능하도록 컴포넌트를 제작하였습니다.
- 전체 페이지를 반응형으로 제작하여 다양한 기기에서 똑같은 사용자 경험을 유지 할 수 있도록 하였습니다.

<br>

## 3. 어려웠던 부분

### [데이터 관리]
router를 사용해 페이지를 이동시키다보니 데이터를 전역적으로 보내주기 위해서는 App.jsx에서 데이터를 보내줘야 했습니다. 하지만 공용으로 사용이 되다 보니 다른 팀원의 데이터와 내용이 중복되는 경우가 있어 해당 파일 사용이 어려웠습니다.
그래서 1:1 문의 페이지에서는 router로 페이지를 이동시키지 않고 useState와 createContext를 통해 페이지 이동 및 데이터 전달을 진행하여 해당 문제를 해결 할 수 있었습니다.

<img width="1259" alt="스크린샷 2024-08-15 오전 2 18 33" src="https://github.com/user-attachments/assets/67fc279b-b430-454f-9f96-6198428aa539">

    
<br>

## 4. 프로젝트 후기 🍀

CRUD 기능은 이번 프로젝트에서 제가 가장 어려워했던 부분이었습니다. 그래서 일부러 게시판 기능을 자원해서 맡아보았습니다. 욕심을 내서 도전한 만큼, 제작을 완료했을 때의 뿌듯함이 매우 컸습니다. 이 과정을 통해 한층 더 이해할 수 있는 기회를 가질 수 있었고, 다시 한 번 이 기능을 구현해 보면서 스스로 성장할 수 있음을 느낄 수 있었습니다.
