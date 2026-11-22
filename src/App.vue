<script setup lang="ts">
import type { Component } from 'vue';
import {
  ArrowUpRight,
  Brain,
  BriefcaseBusiness,
  Calculator,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  FlaskConical,
  Globe2,
  Github,
  History,
  Network,
  Palette,
  PiggyBank,
  Rocket,
  ServerCog,
  ShieldCheck,
  Users,
  Workflow,
  Zap,
} from 'lucide-vue-next';

type IconCard = {
  icon: Component;
  title: string;
  body: string;
  meta?: string;
};

const profileItems = [
  { label: '경력', value: '5년차 풀스택 웹 개발자' },
  { label: '주요 관심', value: ['AI 주도 개발 · 백엔드 · DB 설계', '운영 안정성 · 확장성'] },
  {
    label: '프로젝트',
    value: [
      '· 방문요양센터 홈페이지 운영 / 배포',
      '· 벙비 계산기 개발 / 운영',
      '· ReCheck Chrome Extension 배포',
    ],
  },
];

const summaryHighlights = [
  {
    label: '실무 스택',
    value: 'Spring Boot · Vue · PHP/Laravel · Python/Django · Docker',
  },
  {
    label: '운영 경험',
    value: '서버 관리 · 배포 · 장애 대응 · DB 백업/복구 · Cloudflare/nginx',
  },
  {
    label: '일하는 방식',
    value: '문서 주도 개발 · 요구사항 검토 · 데이터 정합성 · 운영 리스크 확인',
  },
];

const coreStrengths: IconCard[] = [
  {
    icon: Database,
    title: 'DB 설계와 정합성',
    body: '실무 DB 설계 경험을 바탕으로 틀에 박힌 정규화에만 머무르지 않고, 유지보수 효율과 구조 변경 최소화를 고려해 확장성 있는 설계를 지향합니다.',
    meta: 'Data integrity',
  },
  {
    icon: Workflow,
    title: '상태 전이 사고',
    body: '상용 프로그램에는 유스케이스와 업무 단계별로 다양한 행동, 취소, 변경, 예외 케이스가 존재합니다. 이를 여러 관점에서 함께 검토합니다.',
    meta: 'State flow',
  },
  {
    icon: ServerCog,
    title: '운영을 고려한 구현',
    body: '배포, 서버 관리, 장애 대응 경험을 바탕으로 운영 중 문제가 될 지점을 고려합니다.',
    meta: 'Operation',
  },
  {
    icon: Users,
    title: '요구사항 검토',
    body: '개발 중인 프로그램을 내가 책임지는 제품으로 바라보고, 요구사항을 그대로 구현하기보다 데이터 구조와 운영 리스크 관점에서 의견을 제시합니다.',
    meta: 'Communication',
  },
];

const careerItems = [
  {
    period: '1~2년차',
    title: 'PHP/Laravel 기반 금융 IT',
    summary:
      '실무 개발을 시작하며 프레임워크 사용, Git 기반 협업, 도메인 이해와 코드 변경 영향도의 중요성을 배웠습니다.',
    tags: ['PHP', 'Laravel', 'Git', '금융 IT'],
  },
  {
    period: '3년차',
    title: '커뮤니티 서비스 유지보수와 운영',
    summary:
      'Python/Django 기반 API 작업과 Docker를 포함한 운영 환경을 경험했고, 배포, 서버 관리, 장애 대응, 레거시 유지보수를 함께 맡았습니다.',
    tags: ['Python', 'Django', 'Docker', '운영', '서버 관리', '장애 대응'],
  },
  {
    period: '4~5년차',
    title: 'Spring Boot/Vue 물류 포워딩 플랫폼',
    summary:
      '단가, 노선, 예약, 입출고, 수출입 흐름을 구현하며 데이터 생명주기와 상태 전이를 고려해 개발했습니다. ' +
      'Claude Code를 활용해 기획 문서를 바탕으로 개발하는 스펙 주도 개발(SDD)과 테스트 주도 개발(TDD)을 함께 적용했습니다.',
    tags: ['Spring Boot', 'Vue', 'JPA', 'DB 설계', '물류'],
  },
];

const softSkills: IconCard[] = [
  {
    icon: Brain,
    title: '학습 태도',
    body: '부족한 도메인 지식은 실무자와 적극적으로 소통하며 빠르게 보완해왔고, 처음 활용하는 기술은 왜 필요한지부터 파고들며 습득했습니다.',
  },
  {
    icon: Network,
    title: '구조적 사고',
    body: '데이터 생명주기, 상태 변화, 후속 업무 영향을 먼저 확인하고, 불필요한 API 호출을 줄이면서 프론트엔드에 필요한 데이터를 효율적으로 전달하는 백엔드를 개발합니다.',
  },
  {
    icon: ShieldCheck,
    title: '책임감',
    body: '프로그램의 성공이 곧 나의 성장이라고 믿고, 개발 이후의 배포, 운영, 유지보수 흐름까지 고려해 작업하려고 노력합니다.',
  },
];

const recheckPoints = [
  'AI가 정답을 제공하지 않고 질문과 힌트만 제공',
  '본문 근거 기반 질문 생성과 원문 확인 흐름 구현',
  'API 비용과 사용자 데이터 통제를 고려한 개인 API 키 방식',
  'Chrome Web Store 배포 완료',
];
const visitingCarePoints: IconCard[] = [
  {
    icon: Palette,
    title: 'AI 협업 기반 UI/UX 개선',
    body: 'Frontend Design, UI/UX Pro Max 스킬을 참고해 보호자 관점의 정보 위계, 모바일 CTA, 색상 대비, 섹션 흐름을 Codex와 반복 개선했습니다.',
  },
  {
    icon: ServerCog,
    title: 'Docker + GitHub Actions CI/CD',
    body: '프론트엔드와 백엔드를 Docker 이미지로 빌드하고, GitHub Actions를 통해 Docker Hub에 자동 푸시되는 배포 흐름을 구성했습니다.',
  },
  {
    icon: Database,
    title: 'Vue3 + Spring Boot + MySQL',
    body: '센터 소개, 공지사항, 갤러리, 상담 유도 흐름을 운영 가능한 화면으로 구성하고 MySQL 기반 데이터 흐름과 관리자 기능을 연결했습니다.',
  },
  {
    icon: Globe2,
    title: '실제 운영 서비스 배포',
    body: '어머니가 실제 운영하는 방문요양센터 홈페이지를 개발해 가비아 호스팅 도메인과 운영 서버에 연결하고 shcare.co.kr에서 서비스 중입니다.',
  },
];

const bungbiPoints: IconCard[] = [
  {
    icon: Zap,
    title: '저장 버튼이 없는 실시간 저장',
    body: '숫자를 치는 대로 바로 저장되고, 저장 중인지 저장됐는지를 화면이 그때그때 알려줍니다. 술자리에서 버튼을 찾을 필요 없이 금액만 넣으면 그 자리에서 계산이 끝납니다.',
  },
  {
    icon: History,
    title: '지난 모임도 그대로 남습니다',
    body: '모든 값을 DB에 저장해 두기 때문에 지난 날짜의 모임을 언제든 다시 열어 그때 누가 얼마를 냈는지 확인할 수 있습니다.',
  },
  {
    icon: PiggyBank,
    title: '운영비 0원으로 호스팅',
    body: 'Supabase와 Vercel의 무료 플랜만으로 데이터베이스와 서버를 운영합니다. 비용을 늘리지 않으려고 함수 리전을 도쿄로 옮기고 화면 하나에 필요한 조회를 한 번으로 줄였으며, 무료 DB가 잠들지 않도록 하루 한 번 깨우는 cron을 두었습니다.',
  },
  {
    icon: FlaskConical,
    title: '정산 규칙은 순수 함수로',
    body: 'React와 DB를 모르는 순수 함수에 계산 규칙을 모으고, 130여 개의 Vitest 테스트로 "걷는 돈은 영수증 총액을 넘지 않는다"는 불변식을 모든 입력 조합에서 검증합니다.',
  },
  {
    icon: Database,
    title: 'DB까지 내려간 불변식',
    body: '같은 규칙을 Postgres 제약 트리거로도 막았습니다. 금액과 참여자를 나눠 쓰는 동안 생기는 중간 상태까지 검사되므로, 쓰는 순서를 금액 방향에 따라 바꿔 과다 징수가 남지 않게 했습니다.',
  },
  {
    icon: ShieldCheck,
    title: '로그인 없는 권한 모델',
    body: '술자리에서 가입부터 시킬 수는 없어서, 모임을 만든 기기에만 남는 토큰으로 수정 권한을 가릅니다. 목록이 공개인 만큼 계좌번호 같은 민감 정보는 처음부터 저장하지 않았습니다.',
  },
];
</script>

<template>
  <div class="min-h-screen bg-[#f5f7fa] text-[#111827]">
    <header class="border-b border-slate-200 bg-white/92 backdrop-blur">
      <nav class="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#" class="flex items-center gap-3">
          <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-sm font-bold text-white">
            CL
          </span>
          <span>
            <span class="block text-sm font-semibold">CoverLetter</span>
            <span class="block text-xs text-slate-500">5년차 웹 개발자</span>
          </span>
        </a>

        <div class="hidden items-center gap-5 text-sm text-slate-600 md:flex">
          <a href="#career" class="hover:text-slate-950">경력</a>
          <a href="#strengths" class="hover:text-slate-950">강점</a>
          <a href="#project" class="hover:text-slate-950">프로젝트</a>
          <a href="#contact" class="hover:text-slate-950">연락</a>
        </div>
      </nav>
    </header>

    <main class="mx-auto max-w-7xl px-5 py-6 md:px-8 md:py-8">
      <section class="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
        <article class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <p class="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-700">
            <BriefcaseBusiness class="h-4 w-4" />
            Spring Boot · Vue3 · AI
          </p>
          <h1 class="mt-5 max-w-4xl text-3xl font-bold leading-tight text-slate-950 md:text-3xl">
            현업을 파고들며 도메인 지식을
            <span class="block">발굴하는 풀스택 개발자 박승제입니다.</span>
          </h1>
          <p class="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
            금융 IT로 개발을 시작해 동시 접속자 5만 명 규모의 사이트 운영 및 배포 경험을 거쳐,
            <br/>
            Spring Boot와 Vue3 기반
            물류 포워딩 플랫폼을 기획, 설계, 개발한 경험이 있습니다.
            <br/>
            현재는 Claude Code, Codex 등 MCP를 연동하여 AI 에이전트를 효율적으로
            <br/>
            활용한 개발을 진행 중입니다.
          </p>

          <div class="mt-6 grid gap-3 md:grid-cols-3">
            <div
              v-for="item in summaryHighlights"
              :key="item.label"
              class="rounded-lg border border-slate-200 bg-slate-50 p-4"
            >
              <p class="text-xs font-semibold text-slate-500">{{ item.label }}</p>
              <p class="mt-2 text-sm font-semibold leading-6 text-slate-900">{{ item.value }}</p>
            </div>
          </div>

          <div class="mt-6 flex flex-wrap gap-3">
            <a
              href="#career"
              class="inline-flex h-11 items-center gap-2 rounded-lg bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              경력 요약 보기
              <ArrowUpRight class="h-4 w-4" />
            </a>
            <a
              href="https://velog.io/@psj0810/%ED%97%98%EB%82%9C%ED%95%9C-%EC%A3%BC%EB%8B%88%EC%96%B4%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%A1%9C%EC%9D%98-%EA%B8%B8"
              target="_blank"
              rel="noreferrer"
              class="inline-flex h-11 items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
            >
              개발 전환기 읽기
              <ExternalLink class="h-4 w-4" />
            </a>
          </div>
        </article>

        <aside class="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <div class="grid grid-cols-[112px_1fr] gap-4 border-b border-slate-100 p-5 lg:grid-cols-1">
            <img
              src="/my-image.jpg"
              alt="프로필 사진"
              class="h-28 w-28 rounded-lg object-cover ring-1 ring-slate-200 lg:h-56 lg:w-full"
            />
            <div class="min-w-0 self-center">
              <p class="text-sm font-semibold text-slate-500">Profile</p>
              <h2 class="mt-1 text-xl font-bold text-slate-950">5년차 웹 개발자</h2>
              <p class="mt-2 text-sm leading-6 text-slate-600">
                - 온투업, 대부업 등 금융 IT 개발<br/>
                - 국내 10위권 커뮤니티 운영/배포<br/>
                - 물류 포워딩 플랫폼 기획, 설계, 개발 주도
              </p>
            </div>
          </div>

          <div class="p-5">
            <h2 class="text-sm font-semibold text-slate-500">Quick Profile</h2>
            <dl class="mt-4 space-y-3">
            <div
              v-for="item in profileItems"
              :key="item.label"
              class="rounded-lg border border-slate-100 bg-slate-50 p-3"
            >
              <dt class="text-xs font-semibold text-slate-500">{{ item.label }}</dt>
              <dd class="mt-1 text-sm font-semibold leading-5 text-slate-900">
                <template v-if="Array.isArray(item.value)">
                  <span v-for="line in item.value" :key="line" class="block">{{ line }}</span>
                </template>
                <template v-else>{{ item.value }}</template>
              </dd>
            </div>
            </dl>
          </div>
        </aside>
      </section>

      <section id="strengths" class="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="strength in coreStrengths"
          :key="strength.title"
          class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
        >
          <div class="flex items-start justify-between gap-4">
            <component :is="strength.icon" class="h-6 w-6 text-emerald-600" />
            <span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-500">
              {{ strength.meta }}
            </span>
          </div>
          <h3 class="mt-5 text-lg font-bold text-slate-950">{{ strength.title }}</h3>
          <p class="mt-3 text-sm leading-6 text-slate-600">{{ strength.body }}</p>
        </article>
      </section>

      <section id="career" class="mt-5 grid gap-5 lg:grid-cols-[1fr_0.85fr]">
        <article class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p class="text-sm font-semibold text-emerald-700">Career Timeline</p>
              <h2 class="mt-2 text-2xl font-bold text-slate-950">경력 흐름</h2>
            </div>
            <p class="max-w-md text-sm leading-6 text-slate-500">
              단순 기능 구현을 하던 주니어 시절을 거쳐, 도메인을 이해하고 유지보수성과 확장성을 고려해 설계하는 개발자로 성장했습니다. 현재는 AI와 MCP를 활용해 더 빠르고 일관된 개발 흐름을 만들고 있습니다.
            </p>
          </div>

          <div class="mt-6 space-y-4">
            <div
              v-for="item in careerItems"
              :key="item.period"
              class="rounded-lg border border-slate-200 bg-slate-50 p-5"
            >
              <div class="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <p class="text-sm font-bold text-emerald-700">{{ item.period }}</p>
                  <h3 class="mt-1 text-lg font-bold text-slate-950">{{ item.title }}</h3>
                  <p class="mt-3 text-sm leading-6 text-slate-600">{{ item.summary }}</p>
                </div>
              </div>
              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  v-for="tag in item.tags"
                  :key="tag"
                  class="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

        </article>

        <div class="grid gap-5">
          <article class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div class="flex items-center gap-3">
              <Users class="h-6 w-6 text-emerald-600" />
              <div>
                <p class="text-sm font-semibold text-emerald-700">Soft Skills</p>
                <h2 class="text-xl font-bold text-slate-950">협업과 성장 방식</h2>
              </div>
            </div>
            <div class="mt-5 space-y-4">
              <div v-for="skill in softSkills" :key="skill.title" class="flex gap-3">
                <component :is="skill.icon" class="mt-1 h-5 w-5 shrink-0 text-slate-500" />
                <div>
                  <h3 class="text-sm font-bold text-slate-950">{{ skill.title }}</h3>
                  <p class="mt-1 text-sm leading-6 text-slate-600">{{ skill.body }}</p>
                </div>
              </div>
            </div>
          </article>

          <article class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div class="flex items-center gap-3">
              <Code2 class="h-6 w-6 text-slate-600" />
              <div>
                <p class="text-sm font-semibold text-slate-500">Stack Snapshot</p>
                <h2 class="text-xl font-bold text-slate-950">실무 기술</h2>
              </div>
            </div>
            <div class="mt-5 flex flex-wrap gap-2">
              <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">Spring Boot</span>
              <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">Vue</span>
              <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">JPA</span>
              <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">DB 설계</span>
              <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">Python/Django</span>
              <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">Docker</span>
              <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">nginx</span>
              <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">Cloudflare</span>
              <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">PHP/Laravel</span>
              <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">운영/배포</span>
            </div>
          </article>
        </div>
      </section>

      <section id="project" class="mt-5 rounded-lg border border-slate-200 bg-slate-950 p-6 text-white shadow-sm md:p-7">
        <div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p class="text-sm font-semibold text-emerald-300">Side Projects</p>
            <h2 class="mt-2 text-2xl font-bold">실제로 만들고 운영한 서비스</h2>
          </div>
        </div>

        <article class="mt-6 overflow-hidden rounded-lg border border-cyan-300/25 bg-white text-slate-950 shadow-xl shadow-cyan-950/20">
          <div class="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div class="bg-gradient-to-br from-cyan-50 via-white to-emerald-50 p-6 md:p-7">
              <div class="flex items-center gap-3">
                <span class="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-700 text-white">
                  <Rocket class="h-5 w-5" />
                </span>
                <div>
                  <p class="text-sm font-bold text-cyan-700">운영 배포 프로젝트</p>
                  <h3 class="text-2xl font-bold text-slate-950">방문요양센터 홈페이지</h3>
                </div>
              </div>
              <p class="mt-5 text-sm leading-7 text-slate-700">
                어머니가 실제 운영하는 방문요양센터의 홍보 홈페이지를 Codex와 협업해 개발했습니다.
                보호자가 필요한 정보를 빠르게 찾고 전화 상담까지 이어질 수 있도록 메인, 센터 소개,
                공지사항, 갤러리, 상세 페이지의 UI/UX를 개선했고 현재 운영 배포 중입니다.
              </p>
              <div class="mt-5 flex flex-wrap gap-2">
                <span class="rounded-full bg-white px-3 py-1 text-xs font-bold text-cyan-800 ring-1 ring-cyan-100">Vue3</span>
                <span class="rounded-full bg-white px-3 py-1 text-xs font-bold text-cyan-800 ring-1 ring-cyan-100">Spring Boot</span>
                <span class="rounded-full bg-white px-3 py-1 text-xs font-bold text-cyan-800 ring-1 ring-cyan-100">MySQL</span>
                <span class="rounded-full bg-white px-3 py-1 text-xs font-bold text-cyan-800 ring-1 ring-cyan-100">Docker</span>
                <span class="rounded-full bg-white px-3 py-1 text-xs font-bold text-cyan-800 ring-1 ring-cyan-100">GitHub Actions</span>
                <span class="rounded-full bg-white px-3 py-1 text-xs font-bold text-cyan-800 ring-1 ring-cyan-100">Gabia</span>
              </div>
              <a
                href="https://shcare.co.kr/"
                target="_blank"
                rel="noreferrer"
                class="mt-6 inline-flex h-10 items-center gap-2 rounded-lg bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                shcare.co.kr 보기
                <ExternalLink class="h-4 w-4" />
              </a>
            </div>

            <div class="grid gap-3 bg-slate-900 p-5 md:grid-cols-2 md:p-6">
              <div
                v-for="point in visitingCarePoints"
                :key="point.title"
                class="rounded-lg border border-white/10 bg-white/[0.06] p-4"
              >
                <component :is="point.icon" class="h-5 w-5 text-cyan-300" />
                <h4 class="mt-3 text-sm font-bold text-white">{{ point.title }}</h4>
                <p class="mt-2 text-sm leading-6 text-white/70">{{ point.body }}</p>
              </div>
            </div>
          </div>
        </article>

        <article class="mt-5 overflow-hidden rounded-lg border border-cyan-300/25 bg-white text-slate-950 shadow-xl shadow-cyan-950/20">
          <div class="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div class="bg-gradient-to-br from-cyan-50 via-white to-emerald-50 p-6 md:p-7">
              <div class="flex items-center gap-3">
                <span class="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-700 text-white">
                  <Calculator class="h-5 w-5" />
                </span>
                <div>
                  <p class="text-sm font-bold text-cyan-700">운영 배포 프로젝트</p>
                  <h3 class="text-2xl font-bold text-slate-950">벙비 계산기</h3>
                </div>
              </div>
              <p class="mt-5 text-sm leading-7 text-slate-700">
                모임의 회비 정산을 자리에서 끝내려고 만든 서비스입니다. 차수마다 영수증 총액과
                간 사람만 고르면 1인당 금액, 벙주가 메울 돈, 사람별로 보낼 돈과 돌려받을 돈이
                계산되고, 카카오톡에 그대로 붙여넣을 정산 글까지 만들어 줍니다. 로그인 없이
                모임을 만든 기기에만 수정 권한이 남으며, 실제 모임에서 쓰면서 계속 고쳐가고
                있습니다.
              </p>
              <div class="mt-5 flex flex-wrap gap-2">
                <span class="rounded-full bg-white px-3 py-1 text-xs font-bold text-cyan-800 ring-1 ring-cyan-100">Next.js</span>
                <span class="rounded-full bg-white px-3 py-1 text-xs font-bold text-cyan-800 ring-1 ring-cyan-100">React</span>
                <span class="rounded-full bg-white px-3 py-1 text-xs font-bold text-cyan-800 ring-1 ring-cyan-100">TypeScript</span>
                <span class="rounded-full bg-white px-3 py-1 text-xs font-bold text-cyan-800 ring-1 ring-cyan-100">Supabase</span>
                <span class="rounded-full bg-white px-3 py-1 text-xs font-bold text-cyan-800 ring-1 ring-cyan-100">PostgreSQL</span>
                <span class="rounded-full bg-white px-3 py-1 text-xs font-bold text-cyan-800 ring-1 ring-cyan-100">Vitest</span>
                <span class="rounded-full bg-white px-3 py-1 text-xs font-bold text-cyan-800 ring-1 ring-cyan-100">Vercel</span>
              </div>
              <div class="mt-5 grid grid-cols-3 gap-2">
                <div class="rounded-lg border border-cyan-100 bg-white/70 p-3">
                  <p class="text-xs font-semibold text-slate-500">운영비</p>
                  <p class="mt-1 text-sm font-bold text-slate-900">월 0원</p>
                </div>
                <div class="rounded-lg border border-cyan-100 bg-white/70 p-3">
                  <p class="text-xs font-semibold text-slate-500">저장</p>
                  <p class="mt-1 text-sm font-bold text-slate-900">실시간 자동</p>
                </div>
                <div class="rounded-lg border border-cyan-100 bg-white/70 p-3">
                  <p class="text-xs font-semibold text-slate-500">기록</p>
                  <p class="mt-1 text-sm font-bold text-slate-900">지난 모임 보관</p>
                </div>
              </div>

              <a
                href="https://bungbi-calculator.vercel.app/"
                target="_blank"
                rel="noreferrer"
                class="mt-6 inline-flex h-10 items-center gap-2 rounded-lg bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                벙비 계산기 열어보기
                <ExternalLink class="h-4 w-4" />
              </a>
            </div>

            <div class="grid gap-3 bg-slate-900 p-5 md:grid-cols-2 md:p-6">
              <div
                v-for="point in bungbiPoints"
                :key="point.title"
                class="rounded-lg border border-white/10 bg-white/[0.06] p-4"
              >
                <component :is="point.icon" class="h-5 w-5 text-cyan-300" />
                <h4 class="mt-3 text-sm font-bold text-white">{{ point.title }}</h4>
                <p class="mt-2 text-sm leading-6 text-white/70">{{ point.body }}</p>
              </div>
            </div>
          </div>
        </article>

        <div class="mt-4">
        <div class="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p class="text-sm font-semibold text-emerald-300">Side Project</p>
            <h2 class="mt-2 text-2xl font-bold">ReCheck</h2>
            <p class="mt-4 text-sm leading-6 text-white/70">
              사용자가 인터넷에서 읽은 글을 바탕으로 AI가 질문과 힌트를 생성해, 글의 내용을
              실제로 이해했는지 다시 확인할 수 있도록 돕는 Chrome 확장 프로그램입니다.
            </p>
            <div class="mt-5 flex flex-wrap gap-2">
              <a
                href="https://chromewebstore.google.com/detail/recheck/kljjgjpegdgbodipcgmmfhjjeidjiagi"
                target="_blank"
                rel="noreferrer"
                class="inline-flex h-10 items-center gap-2 rounded-lg bg-white px-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Chrome Web Store
                <ExternalLink class="h-4 w-4" />
              </a>
              <a
                href="https://velog.io/@psj0810/ReCheck-Chrome-%ED%99%95%EC%9E%A5-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-%EA%B0%9C%EB%B0%9C-%ED%9A%8C%EA%B3%A0%EB%A1%9D"
                target="_blank"
                rel="noreferrer"
                class="inline-flex h-10 items-center gap-2 rounded-lg border border-white/20 px-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                개발 회고록
                <ExternalLink class="h-4 w-4" />
              </a>
            </div>
          </div>

          <div class="grid gap-3 md:grid-cols-2">
            <div
              v-for="point in recheckPoints"
              :key="point"
              class="rounded-lg border border-white/10 bg-white/[0.06] p-4"
            >
              <CheckCircle2 class="h-5 w-5 text-emerald-300" />
              <p class="mt-3 text-sm leading-6 text-white/75">{{ point }}</p>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section id="contact" class="mt-5 mb-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div class="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 class="text-2xl font-bold text-slate-950">우수한 품질의 시스템을 개발하겠습니다.</h2>
            <p class="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              백엔드 개발 역량과 DB 설계 경험을 바탕으로, 유지보수성과 운영 효율을 함께 고려하는 시스템을 개발하겠습니다.
            </p>
            <p class="mt-3 text-sm font-semibold text-slate-700">
              Email:
              <a href="mailto:tmdwprpdla@gmail.com" class="text-slate-950 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-950">
                tmdwprpdla@gmail.com
              </a>
            </p>
          </div>
          <div class="flex flex-wrap gap-2">
            <a
              href="https://github.com/Parkseungje"
              target="_blank"
              rel="noreferrer"
              class="inline-flex h-10 items-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-semibold text-slate-700"
            >
              <Github class="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://velog.io/@psj0810/posts"
              target="_blank"
              rel="noreferrer"
              class="inline-flex h-10 items-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-semibold text-slate-700"
            >
              <ExternalLink class="h-4 w-4" />
              Blog
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
