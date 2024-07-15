# 야교통어때?

## 🏆 기획

국내 여행 및 장거리 이동 시 빠르게 교통수단(버스, 열차 등)을 한번에 조회할 수 있는 기능을 구현한 사이트

**`서비스 링크`** : [서비스 링크](https://galaxy-beige.vercel.app/)

**`피그마 링크`** : [피그마 초안 링크](https://www.figma.com/design/fsCvUIZ5MoWdIz6r6kvSp3/Galaxy?node-id=0-1)

## 🍳 사용 기술

![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)![React](https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![image](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)![image](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white)

## 📂 폴더 구조

```

📦 Project
├── 📜 README.md
├── 📜 next-env.d.ts
├── 📜 next.config.mjs
├── 📜 package-lock.json
├── 📜 package.json
├── 📜 postcss.config.mjs
├── 📂 public
│   ├── 📜 google-icon.png
│   ├── 📜 how-traffic.png
│   ├── 📜 next.svg
│   ├── 📜 train-512.png
│   └── 📜 vercel.svg
├── 📂 src
│   ├── 📂 api
│   │   ├── 📜 api.ts
│   │   ├── 📜 bookMark.ts
│   │   ├── 📜 busApi.ts
│   │   ├── 📜 test.ts
│   │   └── 📜 trainApi.ts
│   ├── 📂 app
│   │   ├── 📂 (providers)
│   │   │   ├── 📂 (root)
│   │   │   │   ├── 📂 info
│   │   │   │   │   ├── 📂 bus
│   │   │   │   │   │   └── 📜 page.tsx
│   │   │   │   │   ├── 📜 layout.tsx
│   │   │   │   │   └── 📂 train
│   │   │   │   │       └── 📜 page.tsx
│   │   │   │   ├── 📂 my-page
│   │   │   │   │   └── 📜 page.tsx
│   │   │   │   └── 📂 search
│   │   │   │       └── 📜 page.tsx
│   │   │   └── 📜 layout.tsx
│   │   ├── 📂 @modal
│   │   │   ├── 📂 (.)login
│   │   │   │   └── 📜 page.tsx
│   │   │   └── 📜 default.tsx
│   │   ├── 📂 api
│   │   │   ├── 📂 auth
│   │   │   │   ├── 📂 auth-error
│   │   │   │   │   └── 📜 page.tsx
│   │   │   │   └── 📂 callback
│   │   │   │       └── 📜 route.ts
│   │   │   ├── 📂 book-mark
│   │   │   │   └── 📜 route.ts
│   │   │   ├── 📂 bus
│   │   │   │   └── 📂 info
│   │   │   │       └── 📜 route.ts
│   │   │   └── 📂 train
│   │   │       └── 📂 info
│   │   │           └── 📜 route.ts
│   │   ├── 📜 favicon.ico
│   │   ├── 📜 globals.css
│   │   ├── 📜 layout.tsx
│   │   ├── 📂 login
│   │   │   └── 📜 page.tsx
│   │   ├── 📜 not-found.tsx
│   │   └── 📜 page.tsx
│   ├── 📂 assets
│   │   ├── 📜 arrow.png
│   │   ├── 📜 bus.png
│   │   ├── 📜 busStation.json
│   │   ├── 📜 how-traffic.png
│   │   ├── 📜 location.json
│   │   ├── 📜 train.png
│   │   └── 📜 trainStation.json
│   ├── 📂 components
│   │   ├── 📂 BusPage
│   │   │   ├── 📜 Card.tsx
│   │   │   └── 📜 NonBusApi.tsx
│   │   ├── 📜 Navbar.tsx
│   │   ├── 📂 SearchPage
│   │   │   └── 📜 Tag.tsx
│   │   ├── 📜 SignInBtn.tsx
│   │   ├── 📜 ThreeBarsSvg.tsx
│   │   ├── 📂 TrainPage
│   │   │   ├── 📜 Card.tsx
│   │   │   └── 📜 NonTrainApi.tsx
│   │   ├── 📜 UserCircleSvg.tsx
│   │   ├── 📜 XMarkSvg.tsx
│   │   ├── 📂 common
│   │   │   ├── 📜 LoadingPage.tsx
│   │   │   └── 📜 LoadingSpinner.tsx
│   │   └── 📂 myPage
│   │       ├── 📜 MyPageLoading.tsx
│   │       ├── 📜 MyPageMain.tsx
│   │       ├── 📜 OperationCard.tsx
│   │       └── 📜 SideBar.tsx
│   ├── 📂 hooks
│   │   ├── 📜 useBookMark.ts
│   │   ├── 📜 useBus.ts
│   │   └── 📜 useTrain.ts
│   ├── 📜 middleware.ts
│   ├── 📂 providers
│   │   ├── 📜 QueryProvider.tsx
│   │   └── 📜 ToastProvider.tsx
│   ├── 📂 supabase
│   │   ├── 📜 middleware.ts
│   │   ├── 📜 supabaseBrowserClient.ts
│   │   └── 📜 supabaseServerClient.ts
│   ├── 📂 types
│   │   ├── 📜 bookMark.ts
│   │   ├── 📜 busStation.ts
│   │   ├── 📜 supabase.ts
│   │   └── 📜 trainStation.ts
│   ├── 📂 utils
│   │   ├── 📜 formatDate.ts
│   │   └── 📜 toastHelper.ts
│   └── 📂 zustand
│       └── 📜 user.store.ts
├── 📂 supabase
│   ├── 📜 config.toml
│   └── 📜 seed.sql
├── 📜 tailwind.config.ts
└── 📜 tsconfig.json

```

## 🧨 트러블 슈팅

<details>
<summary>‘강원 → 부산’ 열차 검색 시 왜 오류가 날까?</summary>

- **`해당 문제`** : ‘강원 → 부산’ 열차 검색 시 왜 오류가 날까?

- **`문제 원인`** : 국내 KTX노선 6개(경부선, 호남선, 강릉선, 중앙선 등)에서 강원에서 부산으로 가는 노선 자체가 없다. (코드 측면의 문제보다 KTX 노선이 없다는 문제.)

- **`문제 해결`** : datas(response data의 묶음)가 없다면 ‘해당 열차가 없음’ 컴포넌트를 보여준다.

```

// src > app > (providers) > (root) > info > train > page.tsx

  const params = {
    pageNo: PAGE_NO,
    numOfRows: NUM_OF_ROWS,
    depPlaceId,
    arrPlaceId,
    depPlandTime
  };
  const { datas, isLoading }: { datas: TTrainInfo[]; isLoading: boolean } = useTrain(params);

  if (isLoading) return <LoadingPage />;
  if (!datas) return <NonTrainApi />;

```

</details>

<details>
<summary>‘인천 → 부산’ 행 열차 검색 시 왜 오류 메시지가 뜰까?</summary>

- **`해당 문제`** : ‘인천 → 부산’ 행 열차 검색 시 왜 계속 로딩 중일까?

- **`문제 원인`** : 버스에만 있는 PlaceId(예: 인천, 세종)라서 trainStation.json 에는 없어서 PlaceId가 undefined이기 때문!

- 반대의 경우: 열차에만 있는 PlaceId는 용산, 서대전, 양평

- **`문제 해결`** : 커스텀훅 ‘useTrain’ 의 queryFn에서 조건을 넣었다. PlaceId의 값이 없다면(undefined) api 호출 함수를 return 한다.

```

// src > hooks > useTrain.ts

'use client';
import api from '@/api/api';
import { useQuery } from '@tanstack/react-query';

const getTrainDataTest = async (trainParams: TTrainParams) => {
  if (!trainParams.depPlaceId || !trainParams.arrPlaceId) {
    return;
  }
  api.train.getTrainData(trainParams);
};

function useTrain(trainParams: TTrainParams) {
  const {
    data: datas,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['train'],
    queryFn: () => getTrainDataTest(trainParams)
  });

  return { datas, isLoading, isError };
}

export default useTrain;

```

</details>

## 👨‍👩‍👧 구성원

| 역할 | 이름   | 분담             | 깃허브                           |
| ---- | ------ | ---------------- | -------------------------------- |
| 팀장 | 정주신 | 결과페이지\_열차 | https://github.com/JOYmet33      |
| 팀원 | 김형빈 | 마이페이지, 서버 | https://github.com/hb9901        |
| 팀원 | 정현우 | 헤더, 로그인     | https://github.com/junghyunwoo02 |
| 팀원 | 박성욱 | 결과페이지\_버스 | https://github.com/SecretCandy   |
| 팀원 | 윤문열 | 검색페이지       | https://github.com/munyeol-Yoon  |
