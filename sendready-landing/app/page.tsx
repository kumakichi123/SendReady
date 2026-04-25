import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  ChevronDown,
  CircleDollarSign,
  Download,
  FileText,
  Globe2,
  ListChecks,
  MailPlus,
  Plus,
  Send,
  Target,
  UsersRound,
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

const worries = [
  ["営業先を探すのが大変", "条件に合う企業を探すだけで、時間が溶けていく。", "/generated-icons/lead-search.png"],
  ["企業ごとの調査が重い", "相手の事業や課題を調べるほど、文面作成まで進まない。", "/generated-icons/company-research.png"],
  ["メールを毎回書き分けるのが面倒", "同じテンプレでは弱い。でも1社ずつ考えるのはきつい。", "/generated-icons/mail-writing.png"],
  ["確認できる形に整えるのも手間", "リスト、件名、本文をばらばらに管理すると抜け漏れが起きる。", "/generated-icons/draft-check.png"],
];

const steps = [
  "あなたの会社情報やターゲット条件を入力",
  "AIが最適な営業先をリストアップ",
  "各社に合わせた営業メールのドラフトを自動生成",
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
    <div className="hero-product-preview">
      <LeadMock />
      <MailMock />
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

export default function Home() {
  return (
    <main id="top">
      <AnimationBoot />
      <header className="site-header">
        <Logo />
        <nav>
          <a href="#features">特徴</a>
          <a href="#howto">使い方</a>
          <a href="#pricing">料金</a>
          <a href="#faq">FAQ</a>
          <a className="header-cta" href="#signup">30社限定で先行登録する <ArrowRight size={17} /></a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy reveal reveal-hero-copy">
          <h1>メール営業を<br /><strong>AI</strong>で一気通貫。</h1>
          <p>企業情報やターゲット条件を入力するだけで、AIが営業先をリストアップし、相手に合わせた営業メールのドラフトまで生成。確認しながら、安心して活用できます。</p>
          <div className="hero-actions">
            <a className="primary-cta" href="#signup">30社限定で先行登録する <ArrowRight /></a>
          </div>
          <small><Check size={15} />先着30社限定・優待価格でご案内</small>
        </div>

        <div className="hero-stage reveal reveal-hero-stage">
          <HeroProductPreview />
        </div>
      </section>

      <section className="worries reveal reveal-worries">
        <div className="section-title">
          <h2>営業メールの作成、<br /><span>面倒じゃありませんか？</span></h2>
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

      <section className="smart-flow reveal reveal-flow" id="features">
        <div className="flow-visual">
          <WorkflowSketch />
        </div>
        <div className="flow-copy">
          <h2>SendReadyなら、<br />営業メール作成をもっと<br /><strong>スマートに。</strong></h2>
          <ol id="howto">
            {steps.map((step, index) => (
              <li key={step}><span>{index + 1}</span>{step}</li>
            ))}
          </ol>
          <p><Check size={16} />内容を確認してから、安心して活用できます。</p>
        </div>
      </section>

      <SampleFlow />

      <section className="pricing-band reveal reveal-pricing" id="pricing">
        <div>
          <span>料金</span>
          <h2>使った分だけの<br /><strong>従量課金</strong>ベース</h2>
        </div>
        <div className="pricing-notes">
          <p><CircleDollarSign />初期費用なし</p>
          <p><ListChecks />必要な分だけ利用</p>
        </div>
        <a href="#signup">30社限定で先行登録する <ArrowRight size={18} /></a>
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
        <h2>先行登録者には、限定価格でご案内。</h2>
        <SignupForm />
      </section>

      <footer>
        <Logo />
        <nav>
          <a href="#features">特徴</a>
          <span>/</span>
          <a href="#howto">使い方</a>
          <span>/</span>
          <a href="#pricing">料金</a>
          <span>/</span>
          <a href="#faq">FAQ</a>
        </nav>
        <p>© 2026 SendReady. All rights reserved.</p>
      </footer>
    </main>
  );
}
