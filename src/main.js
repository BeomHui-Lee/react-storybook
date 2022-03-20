import React from 'react';
import { Link } from 'react-router-dom';

export const Main = () => {
  return(
    <div>
      메인 페이지
      <p> 부트캠프 </p>
      <div>
        <Link to="/day1q">1번 문제</Link>
      </div>
      <div>
        <Link to="/day3q">3번 문제</Link>
      </div>
      <div>
        <Link to="/day5q">5번 문제</Link>
      </div>
      <p> 세미나 </p>
      <div>
        <Link to="/usememo">useMemo</Link>
      </div>
      <div>
        {/*<Link to="/usecallback_1">useCallback_1</Link>*/}
        <Link to="/usecallback">useCallback</Link>
      </div>
    </div>
  )
}

export default Main;