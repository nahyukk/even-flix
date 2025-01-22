# Even-flix
### 프로젝트 소개
TMDB API를 활용해 넷플릭스의 주요 기능을 구현했습니다. 넷플릭스의 사용자 경험을 재현하며 React를 활용한 웹 애플리케이션 개발 능력을 강화하고, 팀원 간 협업 및 버전 관리를 통해 효율적인 개발 프로세스를 경험하는 것이 목표입니다.
### 프로젝트 목표
- React를 활용하여 컴포넌트 기반의 웹 애플리케이션을 설계 및 개발한다.
- TMDB API와 axios를 이용해 데이터를 동적으로 가져오고 화면에 렌더링한다.
- React Router를 사용하여 다중 페이지 네비게이션 및 상태 관리를 구현한다.
- 협업 환경에서 Git과 Trello을 활용해 효율적인 작업 분배와 버전 관리를 연습한다.
- 넷플릭스 UI 및 주요 기능을 분석하고 클론 코딩을 통해 프론트엔드에 대한 기술 역량을 강화한다.
### 지원 기능
**1. 넷플릭스 홈 화면**

- TMDB API를 활용하여 다양한 카테고리별 콘텐츠를 표시.
- 콘텐츠 호버 시 상세 정보 카드를 띄워 추가 정보를 제공하고 클릭 시 모달로 이동

**2. 검색 기능**

- 사용자가 검색어를 입력하면 해당 콘텐츠를 필터링하여 결과를 보여줌.
- 검색 결과는 동적으로 URL에 반영되며 페이지 새로 고침 없이 동작.

**3. 시리즈 및 영화 페이지**

- TV 시리즈와 영화를 각각 분리하여 보여줌.
- 콘텐츠 데이터는 TMDB API에서 동적으로 가져옴.

**4. 요즘 대세 콘텐츠**

- TMDB API의 다양한 엔드포인트를 사용하여 현재 인기 있는 콘텐츠를 보여줌.

**5. 내가 찜한 리스트 (로컬 구현)**

- 사용자가 콘텐츠를 찜하면 로컬 스토리지에 저장.
- 로컬 스토리지를 활용해 사용자 별로 찜한 콘텐츠 리스트를 유지.
- 찜한 콘텐츠는 ui가 변경된 찜 버튼을 사용해 로컬 스토리지 및 찜한 리스트 페이지에서 삭제.

**6. 언어별로 찾아보기**

- 콘텐츠를 언어별로 필터링하여 원하는 콘텐츠를 쉽게 탐색 가능.

**7. 콘텐츠 상세 모달**

- 콘텐츠의 정보를 받아오고, 타입에 따라 각기 다른 데이터를 매핑하여 필요한 정보들을 보여줌
- 시리즈의 경우 변경되면 해당 시즌에 맞는 시리즈 리스트가 보여지도록 적용
### 사용 스택
- **npx-create-react-app** : 초기 프로젝트 셋업 및 개발 환경 구성.
- <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> : 컴포넌트 기반 UI 설계 및 개발.
- <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> : API 요청 및 응답 데이터 처리.
- <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"> : 페이지 간 네비게이션 및 라우팅 처리.
- <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"> , <img src="https://img.shields.io/badge/swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white"> : UI 스타일링 및 스크롤.
## 결과물
### 페이지
![image](https://github.com/user-attachments/assets/f7a489d7-0b1d-4d08-8dc9-9a9da61ab3b8) | ![image](https://github.com/user-attachments/assets/35f17180-1363-481b-abf2-f114463c9891)| ![image](https://github.com/user-attachments/assets/86526d6e-a012-4577-a323-00851f1f1f29) | ![image](https://github.com/user-attachments/assets/814023a9-68db-429a-bec8-1f1f41582392)
|:-------------|:-------------|:-------------|:-------------|
| **홈** | **홈-하단** | **시리즈** | **영화** |

<table style="width: 100%; table-layout: fixed;">
  <tr>
    <td style="text-align: center; width: 25%;">
      <img src="https://github.com/user-attachments/assets/1a3d4f31-8b95-4f54-91e3-19d63cc96b33" style="width:249px" />
    </td>
    <td style="text-align: center; width: 25%;">
      <img src="https://github.com/user-attachments/assets/845aecd0-6328-49fb-ac31-c7ba39a84882" style="width:249px" />
    </td>
    <td style="text-align: center; width: 25%;">
      <img src="https://github.com/user-attachments/assets/33e53509-411e-4069-8e2b-31697c4fe195" style="width:249px" />
    </td>
    <td style="text-align: center; width: 25%;">
      <img src="https://github.com/user-attachments/assets/fa3fe167-69dc-4c08-8604-826757ff11ca" style="width:249px" />
    </td>
  </tr>
  <tr>
    <td style="text-align: center;">요즘 대세 컨텐츠</td>
    <td style="text-align: center;">내가 찜한 리스트</td>
    <td style="text-align: center;">시리즈</td>
    <td style="text-align: center;">검색 기능</td>
  </tr>
</table>

<br>


### 컴포넌트
<table>
  <tr>
    <td style="text-align: center;"><strong>네비바</strong></td>
    <td style="text-align: center;">
      <img src="https://github.com/user-attachments/assets/1b251436-786e-44ac-825a-cebeb602ca5f" style="width:500px" />
    </td>
  </tr>
  <tr>
    <td style="text-align: center;"><strong>배너</strong></td>
    <td style="text-align: center;">
      <img src="https://github.com/user-attachments/assets/8fdc07e3-7b23-4022-b6ab-d1a0581ecac7" style="width:500px"/>
    </td>
  </tr>
  <tr>
    <td style="text-align: center;"><strong>푸터</strong></td>
    <td style="text-align: center;">
      <img src="https://github.com/user-attachments/assets/1cb4c6ad-a270-4aba-b865-1a865294b1bc" style="width:500px" />
    </td>
  </tr>
</table>




![image](https://github.com/user-attachments/assets/5a134c21-0903-4f80-83fd-83d0ee44043c) | ![image](https://github.com/user-attachments/assets/601f07a0-d57a-4f35-91c8-69f6f9e65212) | ![image](https://github.com/user-attachments/assets/ed548f81-6527-448f-9a38-4743548cfeab)
|:-------------|:-------------|:-------------|
| **카드** | **포스터** | **디테일 카드** |

**카드 <br> 그리드** | ![image](https://github.com/user-attachments/assets/99280329-4644-4cdd-b2f1-3ea42de6171c)
|:-------------:|:-------------:|
**카드 <br> 리스트** | ![image](https://github.com/user-attachments/assets/389da840-e183-4680-8c22-4119e3cfda56)
**포스터 리스트** | ![image](https://github.com/user-attachments/assets/75fea395-624b-469f-b9d8-32d0c98101a9)


<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/57e1d15d-fbb3-4cbd-b663-8c8500dda1e8" /></td>
    <td><img src="https://github.com/user-attachments/assets/05f798ce-75e7-4eb5-af52-f1bb5dbc526d" /></td>
    <td><img src="https://github.com/user-attachments/assets/c9be0ca8-fadf-43c9-9889-3f5f62f0af0c" /></td>
  </tr>
  <tr>
    <td colspan="3" style="text-align: center;"><center><strong>상세정보 모달</strong></center></td>
  </tr>
</table>
