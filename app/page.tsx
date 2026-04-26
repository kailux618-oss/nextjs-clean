export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Upgrade Notice */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-4 px-6 shadow-md">
        <p className="text-lg font-semibold">
          🚀 Yeondam Bio 홈페이지는 곧 업그레이드 오픈됩니다.
          <span className="ml-2 text-blue-200">새로운 모습으로 찾아뵙겠습니다!</span>
        </p>
      </div>

      {/* Header / Nav */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
          <a href="/" className="text-xl font-semibold text-blue-900">
            Yeondam Bio
          </a>
          <nav className="flex gap-6 text-sm text-gray-600">
            <a href="/products/telo-star-light-gold" className="hover:text-blue-700">
              TELO STAR LIGHT GOLD
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 pt-14 pb-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
            Cellular Wellness, Made Simple
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            연담바이오의 Nitric Oxide Water 기반 제품으로 일상의 회복과 면역 밸런스를 지원합니다.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/250620_01_2.jpg"
            alt="TELO STAR LIGHT GOLD"
            className="rounded-lg shadow-md w-72"
          />
        </div>
      </section>
    </main>
  );
}{/* test */}
