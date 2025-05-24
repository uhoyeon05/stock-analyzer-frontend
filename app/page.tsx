export default function Page() {
  return (
    <div style={{
      padding: '2rem',
      fontFamily: 'Arial',
      background: 'black',
      color: 'white',
      minHeight: '100vh'
    }}>
      <h1 style={{ fontSize: '2rem' }}>📈 미국 주식 분석기</h1>
      <p>지금 프론트는 정상적으로 작동 중입니다.</p>
      <p><code>/api/price?ticker=AAPL</code>로 주가 데이터 확인 가능</p>
    </div>
  );
}
