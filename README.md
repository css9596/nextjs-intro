This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

#NextJS Introduction

#NextJS 공부정리

create react-app을 통해 생성된 프로젝트에서는 React router DOM을 Download를 받아
사용 해야 하지만 nextJS는 Rendering 처리를 별도로 안해도 pages Directory에 file을 생성해두면
자동으로 Rendering처리를 해준다.(Apstraction:추상화)

###NextJS 규칙
1. pages/FILE 의 File 이름이 url의 이름이 된다.(단, component export(export default function FUNCTION_NAME)을 지정해야 한다.)
2. JSX를 사용할 떄는 별도로 react를 import를 하지 않아도 된다.(단, useState, useEffect등 react method를 사용하고자 하면 import를 해야 함.)

###NextJS 특징
1. 앱에 있는 페이지들이 미리 렌더링이 된다.(pre-rendering)(hydration)
   1. create react app은 client-side render 앱을 만든다.
      1. 브라우저가 javascript, react.js를 불러온 뒤에 화면을 그리기 때문에 느리다.
   2. NextJS는 미리 렌더링이 되어있어 빠르게 보여줄 수 있다.
   3. Next.js는 react.js를 백엔드에서 동작시켜서 페이지를 미리 만든다.(component들을 render시킨다.)
2. FILE_NAME.module.css(css모듈 패턴)을 통해서 평범한 css를 사용할 수 있게 해준다.
   1. className에 랜덤 이름을 부여한다. 
   2. 이를 통해서 className의 충돌을 막아준다.
3. Styled JSX
   1. 컴포넌트 별 독립적으로 Style을 적용 시킬 수가 있다.
   2. <style jsx>{[``]}</style> 으로 구성하여 사용하면 된다.
   3. global 옵션으로 전체 적용을 할 수 있다.
      1. <style jsx global></style>
4. Custom App Component
   1. 페이지를 렌더링 할 때마다 호출 된다.
   2. 필수는 아니지만 템플릿을 커스텀하기 위해서는 작성해야 한다.
5. 커스텀 App 이외의 파일들로부터는 임포트를 할 수 없다.

###Framework와 Library의 차이
Library는 내가 호출하는 거, Framework는 Framework가 나의 코드를 호출 하는거.
Ex) pages/FILE_NAME으로 파일을 생성하면 URL에 ~/FILE_NAME으로 호출하면 알아서 결과를 찾아준다.
    이로 Router/Render 처리를 안하고도 페이지 이동을 기대할 수 있다.

###
