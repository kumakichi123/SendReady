import {
  ArrowRight,
  Building2,
  Check,
  ChevronLeft,
  ChevronDown,
  ChevronRight,
  Download,
  FileText,
  Globe2,
  Plus,
  Search,
  Send,
  Target,
  UsersRound,
  X,
} from "lucide-react";
import { AnimationBoot } from "./AnimationBoot";
import { SignupForm } from "./SignupForm";

const leads = [
  ["デモ株式会社アシラス", "sales-demo@asis.example", "IT・SaaS", "120名"],
  ["デモ株式会社クラウドリンク", "demo@cloudlink.example", "IT・SaaS", "85名"],
  ["デモ株式会社フューチャーラボ", "info@futurelab.example", "IT・SaaS", "200名"],
  ["デモ株式会社デジタルシフト", "hello@digitalshift.example", "システム開発", "150名"],
  ["デモ株式会社グローステック", "contact@growthtech.example", "SaaS", "90名"],
];

const previewCompanies = [
  ["デモ株式会社ミナトクラフト", "東京都 中央区"],
  ["デモ株式会社ノヴァリンク", "東京都 渋谷区"],
  ["デモ株式会社アーバンリーフ", "東京都 港区"],
  ["デモ株式会社ライトウェーブ", "東京都 新宿区"],
  ["デモ東都デジタル株式会社", "東京都 台東区"],
  ["デモ株式会社グランテラス", "東京都 目黒区"],
  ["デモ株式会社オルビット", "東京都 品川区"],
  ["デモヒカリソース株式会社", "東京都 中央区"],
];

const worries = [
  ["営業先を探すのが大変", "条件に合う企業を探すだけで、時間が溶けていく。", "/generated-icons/lead-search.png"],
  ["企業ごとの調査が重い", "相手の事業や課題を調べるほど、文面作成まで進まない。", "/generated-icons/company-research.png"],
  ["定型メールでは刺さらない", "同じテンプレでは弱い。でも1社ずつ考えるのはきつい。", "/generated-icons/mail-writing.png"],
  ["確認できる形に整えるのも手間", "リスト、件名、本文をばらばらに管理すると抜け漏れが起きる。", "/generated-icons/draft-check.png"],
];

const steps = [
  "自社プロダクトとターゲット条件を入力",
  "AIが最適な営業先をリストアップ",
  "営業先の事業に合わせたメール文を自動生成",
  "内容を確認して、利用できる形に整える",
];

const faqs = [
  ["自動でメールは送信されますか？", "いいえ。SendReadyはメール文面の作成を支援し、ユーザーが内容を確認してから利用する想定です。"],
  ["どんな業種・企業規模に対応していますか？", "新規開拓やアウトバウンド営業を行うBtoB事業者を想定しています。"],
  ["どのような情報を入力すれば、リストが作成できますか？", "自社サービスURL、ターゲット業種、従業員数、地域などを入力する想定です。"],
  ["メールは他のツールに連携できますか？", "コピー利用やCSV出力を中心に、外部ツールへ受け渡しやすい形で出力します。"],
];

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="SendReady">
      <Send size={27} fill="currentColor" strokeWidth={1.8} />
      <span>SendReady</span>
    </a>
  );
}

function InputMock() {
  return (
    <div className="ui-panel input-mock">
      <h3>あなたの会社の情報を入力</h3>
      <label>サービスURL<input value="https://example-service.co.jp" readOnly /></label>
      <label>ターゲット業種<span>SaaS・IT <ChevronDown size={13} /></span></label>
      <label>従業員数<span>50〜300名 <ChevronDown size={13} /></span></label>
      <label>地域<span>日本全国 <ChevronDown size={13} /></span></label>
      <button>リストを生成する</button>
    </div>
  );
}

function LeadMock() {
  return (
    <div className="ui-panel lead-mock">
      <div className="ui-head">
        <h3>営業先リスト（128件）</h3>
        <button><Download size={13} /> CSVでエクスポート</button>
      </div>
      <table>
        <colgroup>
          <col className="check-col" />
          <col className="company-col" />
          <col className="email-col" />
          <col className="industry-col" />
          <col className="people-col" />
        </colgroup>
        <thead>
          <tr>
            <th></th>
            <th>企業名</th>
            <th>メールアドレス</th>
            <th>業種</th>
            <th>従業員数</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead[0]}>
              <td><i /></td>
              <td title={lead[0]}>{lead[0]}</td>
              <td title={lead[1]}>{lead[1]}</td>
              <td title={lead[2]}>{lead[2]}</td>
              <td>{lead[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>さらに表示（128件）<ArrowRight size={12} /></p>
    </div>
  );
}

function MailMock() {
  return (
    <div className="ui-panel mail-mock">
      <div className="ui-head">
        <h3>AIが営業メールを作成</h3>
      </div>
      <label>件名<input value="【広告】営業メール作成を効率化するデモ提案" readOnly /></label>
      <label>本文<textarea value={`デモ株式会社アシラス
営業ご担当者様

はじめまして。デモ送信元株式会社の山田です。
貴社サイトを拝見し、営業開拓やデジタル施策に取り組まれている点に関心を持ち、ご連絡しました。

弊社では、営業先リストの整理から企業ごとのメール文面作成までを効率化する仕組みを提供しています。
貴社の新規開拓業務でも、候補企業の整理や初回接点づくりに活用いただける可能性があると考えています。

配信停止をご希望の場合は unsubscribe@example.com までご連絡ください。`} readOnly /></label>
    </div>
  );
}

function ProductUI({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "product-ui compact" : "product-ui"}>
      <InputMock />
      <LeadMock />
      <MailMock />
    </div>
  );
}

function HeroProductPreview() {
  return (
    <div className="hero-product-preview admin-preview" aria-label="SendReadyの営業先検索画面デモ">
      <div className="admin-preview__main">
        <div className="admin-preview__filters">
          <div className="admin-preview__search">
            <Search size={20} />
            <span>会社名・地域・キーワードで検索</span>
          </div>
          <div className="admin-preview__select">
            <small>地域</small>
            <b>東京都</b>
            <ChevronDown size={18} />
          </div>
          <div className="admin-preview__select">
            <small>業種</small>
            <b>指定なし</b>
            <ChevronDown size={18} />
          </div>
          <button>検索</button>
          {["従業員数", "資本金", "連絡先", "営業切り口", "採用状況"].map((label) => (
            <div className="admin-preview__select compact" key={label}>
              <small>{label}</small>
              <b>指定なし</b>
              <ChevronDown size={16} />
            </div>
          ))}
        </div>

        <div className="admin-preview__workspace">
          <section className="admin-preview__list" aria-label="営業先候補リスト">
            <div className="admin-preview__list-head">
              <strong>2,000<br />件</strong>
              <div className="admin-preview__pager">
                <span><ChevronLeft size={17} /></span>
                <b>1</b>
                <em>...</em>
                <b className="is-current">3</b>
                <b>4</b>
                <em>...</em>
                <b>10</b>
                <span><ChevronRight size={17} /></span>
              </div>
              <button>リスト作成</button>
            </div>
            <div className="admin-preview__table">
              <div className="admin-preview__table-head">
                <span></span>
                <span>会社名</span>
                <span>所在地</span>
              </div>
              {previewCompanies.map(([name, area]) => (
                <div className="admin-preview__row" key={name}>
                  <i />
                  <b>{name}</b>
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="admin-preview__detail" aria-label="企業詳細パネル">
            <div className="admin-preview__detail-head">
              <div>
                <h3>株式会社サンプル</h3>
                <p>東京都 中央区</p>
              </div>
              <X size={20} />
            </div>
            <div className="admin-preview__metrics">
              <div><span>従業員数</span><b>84名</b></div>
              <div><span>資本金</span><b>1,600万</b></div>
              <div><span>設立</span><b>2016</b></div>
              <div><span>連絡先</span><b>2件</b></div>
            </div>
            <div className="admin-preview__tabs">
              <span>企業情報</span>
              <span>連絡先</span>
              <b>営業メモ</b>
              <span>採用情報</span>
            </div>
            <div className="admin-preview__info">
              <h4>営業メモ</h4>
              <dl>
                <div><dt>営業切り口</dt><dd>採用強化・問い合わせ対応の効率化</dd></div>
                <div><dt>口コミの悩み</dt><dd>初回返信の遅さ、担当者不在時の対応漏れ、導入後サポートへの不満が複数あり。</dd></div>
                <div><dt>サイト状況</dt><dd>料金表と導入事例はあるが、比較検討向けのFAQが少ない。</dd></div>
                <div><dt>提案メモ</dt><dd>問い合わせ対応と営業リスト整備を同時に改善できる訴求が有効。</dd></div>
                <div><dt>最終確認日</dt><dd>2026-04-28</dd></div>
              </dl>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function SampleProductUI() {
  return (
    <div className="sample-product-ui">
      <InputMock />
      <LeadMock />
      <MailMock />
    </div>
  );
}

function WorkflowSketch() {
  return (
    <div className="workflow-sketch" aria-label="SendReadyの処理イメージ">
      <div className="signal-row">
        <Building2 />
        <Globe2 />
        <UsersRound />
        <Target />
      </div>
      <div className="outcome-line">
        <span>1</span>
        <div>
          <strong>条件を入力</strong>
          <p>自社サービス、業種、地域、従業員数などを指定。</p>
        </div>
      </div>
      <div className="outcome-line">
        <span>2</span>
        <div>
          <strong>営業先を一覧化</strong>
          <p>候補企業、連絡先、業種、規模をまとめて確認。</p>
        </div>
      </div>
      <div className="outcome-line">
        <span>3</span>
        <div>
          <strong>企業ごとの文面を作成</strong>
          <p>相手企業に合わせた件名と本文の下書きを生成。</p>
        </div>
      </div>
    </div>
  );
}

function SampleFlow() {
  return (
    <section className="sample-section reveal reveal-sample" id="sample">
      <div className="sample-heading">
        <h2>メール作成までの流れ</h2>
        <div className="sample-steps" aria-label="メール作成までの流れ">
          <span>会社情報を入力</span>
          <ArrowRight />
          <span>営業リストを作成</span>
          <ArrowRight />
          <span>相手に合わせたメールを作成</span>
        </div>
      </div>
      <SampleProductUI />
    </section>
  );
}

function Strengths() {
  const strengths = [
    [
      "01",
      "圧倒的高品質",
      "1社ずつAIがサイト・口コミ・公開情報を横断調査。強み・弱み・営業できる理由まで精査。",
    ],
    [
      "02",
      "AIエージェント内蔵",
      "自社情報をもとに、営業先の抽出から提案の切り口整理、営業文面作成まで対応。",
    ],
    [
      "03",
      "先行30社限定スタータープラン",
      "3か月無料。その後も正式版を永久半額価格で利用可能。",
    ],
  ];

  return (
    <section className="strengths-section reveal reveal-strengths" id="features" aria-label="SendReadyの強み">
      {strengths.map(([number, title, text]) => (
        <article key={number}>
          <span>{number}</span>
          <h2>{title}</h2>
          <p>{text}</p>
        </article>
      ))}
    </section>
  );
}

function QualityStory() {
  const basicDetails = [
    ["法人番号", "9000000000000"],
    ["住所", "東京都渋谷区神南1丁目12-16"],
    ["公式サイトURL", "https://sample.example"],
    ["メール", "sales@sample.example"],
    ["問い合わせフォームURL", "https://sample.example/contact"],
    ["電話番号", "03-1234-5678"],
  ];

  const richDetails = [
    ["事業内容", "美容室・整体院などの小規模店舗向けに、予約受付、顧客管理、リマインド通知をまとめて管理できるSaaSを提供。Web予約の導入支援にも力を入れている。"],
    ["口コミの痛み", "初期設定でつまずく声が多く、営業時間やメニュー登録に迷う利用者がいる。問い合わせ後の返信待ち時間が長いという不満も見られる。"],
  ];

  return (
    <section className="quality-story reveal reveal-quality">
      <div className="quality-copy">
        <p className="quality-kicker">既存の営業先リストとは</p>
        <h2>質が<strong>違う。</strong></h2>
        <p className="quality-lead">事業内容や口コミに加え、営業の切り口や採用情報まで見える営業リストへ。</p>
        <div className="quality-drama" aria-label="先行登録の理由">
          <span>初期は詳細画面が少ない...</span>
          <b>だからこそ</b>
          <strong>先行30社には<br /><em>永久割引。</em></strong>
        </div>
        <p className="quality-callout">既存の営業先リストにはない<br />詳細情報まで表示！</p>
      </div>

      <div className="quality-visual" aria-label="企業詳細画面のデモ">
        <article className="quality-detail-card">
          <div className="quality-card-head">
            <FileText size={22} />
            <span>詳細画面デモ</span>
          </div>
          <h3>株式会社サンプル</h3>
          <p className="quality-card-note">営業先の表面的な連絡先だけでなく、メールの切り口になる情報まで集約。</p>
          <dl>
            {basicDetails.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <div className="quality-rich-box">
            <dl>
              {richDetails.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </article>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main id="top">
      <AnimationBoot />
      <header className="site-header">
        <Logo />
        <nav>
          <a href="#features">特徴</a>
          <a href="#howto">使い方</a>
          <a href="#faq">FAQ</a>
          <a className="header-cta" href="#signup">30社限定で先行登録する <ArrowRight size={17} /></a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy reveal reveal-hero-copy">
          <p className="hero-kicker">営業リスト作成からメール文面作成まで</p>
          <h1>100社分の営業を、<br /><strong>数時間から数分へ。</strong></h1>
          <p>AIが1社ずつ公開情報を横断調査し、営業できる理由まで整理。営業先の抽出から提案の切り口、メール文面作成まで一気通貫で支援します。</p>
          <div className="hero-badges" aria-label="SendReadyの募集情報">
            <span>6月リリース</span>
            <span>先行30社限定</span>
            <span>3か月無料</span>
            <span>永久半額価格</span>
          </div>
          <div className="hero-actions">
            <a className="primary-cta" href="#signup">30社限定で先行登録する <ArrowRight /></a>
          </div>
          <small><Check size={15} />先行30社限定スタータープランは3か月無料。その後も永久半額価格</small>
        </div>

        <div className="hero-stage reveal reveal-hero-stage">
          <HeroProductPreview />
        </div>
      </section>

      <Strengths />

      <QualityStory />

      <section className="smart-flow reveal reveal-flow">
        <div className="flow-visual">
          <WorkflowSketch />
        </div>
        <div className="flow-copy">
          <h2>相手の事業に合わせて、<br />刺さる営業メールを<br /><strong>AIが生成。</strong></h2>
          <ol id="howto">
            {steps.map((step, index) => (
              <li key={step}><span>{index + 1}</span>{step}</li>
            ))}
          </ol>
          <p><Check size={16} />内容を確認してから、安心して活用できます。</p>
        </div>
      </section>

      <section className="worries reveal reveal-worries">
        <div className="section-title">
          <h2>定型メールの時代は、<br /><span>もう終わり。</span></h2>
        </div>
        <div className="worry-path" aria-label="営業メール作成の面倒な作業">
          <svg viewBox="0 0 900 430" preserveAspectRatio="none" aria-hidden="true">
            <path d="M102 270 C 220 70, 360 110, 455 205 S 690 365, 812 135" />
          </svg>
          {worries.map(([title, text, icon], index) => (
            <div className={`worry-item worry-${index + 1}`} key={title as string}>
              <img src={icon as string} alt="" />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="faq reveal reveal-faq" id="faq">
        <h2>よくあるご質問</h2>
        <div>
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary><span>Q</span>{question}<Plus size={18} /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="signup-line reveal reveal-signup" id="signup">
        <h2>先行30社限定スタータープラン。3か月無料、その後も永久半額価格。</h2>
        <SignupForm />
      </section>

      <footer>
        <Logo />
        <nav>
          <a href="#features">特徴</a>
          <span>/</span>
          <a href="#howto">使い方</a>
          <span>/</span>
          <a href="#faq">FAQ</a>
        </nav>
        <p>© 2026 SendReady. All rights reserved.</p>
      </footer>
    </main>
  );
}
