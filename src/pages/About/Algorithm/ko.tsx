/* eslint-disable max-len,react/no-unescaped-entities */
import { Typography } from 'antd';
import { i, l } from './tex';

const { Title, Link, Text, Paragraph } = Typography;

export function AboutKo() {
  return (
    <Typography>
      <Title level={2}>
        FAQ
      </Title>
      <Title level={4}>
        Q: AlphaOsu가 뭔가요?
      </Title>
      <Paragraph>
        <Link href="https://www.deepmind.com/research/highlighted-research/alphago" target="_blank">AlphaGo</Link>와 <Link href="https://www.nature.com/articles/s41586-021-03819-2" target="_blank">AlphaFold</Link>의 영향을 받아, AlphaOsu!는 AI 기술을 사용하여 osu! 게임 내의 대량 데이터를 채취하여, 플레이어와 커뮤니티에 이익을 주는 응용 프로그램을 생성하고 있습니다. 현재는 osu!mania와 osu!standard 모드만 지원되고 있으며, 나머지 모드의 지원은 개발 중입니다.
      </Paragraph>

      <Title level={4}>
        Q: 왜 로그인할 수 없나요?
      </Title>
      <Paragraph>
        osu! 웹사이트의 제한으로 인해, 현재는 전세계 4자리 수 플레이어 (osu!mania 모드)와 CN 지역 상위 10,000명 플레이어만 조회할 수 있습니다. 나머지 모드와 하위 랭킹 플레이어의 지원은 향후 추가될 예정입니다.
      </Paragraph>

      <Title level={4}>
        Q: 추천된 맵이 너무 어려워서 통과할 수 없어요!
      </Title>
      <Paragraph>
      BP 확률 필터를 높여 보세요. BP 확률은 통과 확률로 이해할 수 있으므로, 높인 후 추천되는 비트맵은 통과할 가능성이 더 높아집니다.
      </Paragraph>

      <Title level={4}>
        Q: 웹사이트 데이터는 어느 주기로 업데이트되나요?
      </Title>
      <Paragraph>
        현재는 3일마다 데이터를 업데이트하고 있습니다. 업데이트 시, <Link href="https: //discord.gg/H5VzJxeK4F" target="_blank">디스코드</Link>와 <Link href="https://jq.qq.com/?_wv=1027&k=uJ8Hv4Ss" target="_blank">QQ 그룹</Link>에서 알림을 받을 수 있습니다.
      </Paragraph>

      <Title level={4}>
        Q: 예상된 점수가 실제 점수보다 낮을 때, 점수가 낮더라도 PP가 증가하는 이유는 무엇인가요?
      </Title>
      <Paragraph>
      일반적으로 알고리즘은 점수의 절반을 더 높게 예측할 것입니다(개선 가능성이 더 큰 경우). 나머지 절반은 더 낮게 예측될 것입니다(기존에 좋은 성적을 냈음을 나타냄). 동시에, 우리는 예측 점수의 총 PP 증가량이 아닌 <strong>기록 갱신 사례</strong>의 총 PP 증가량을 계산할 것입니다. 이는 추천 결과의 안정성을 보장하기 위함으로, 예측 점수가 낮은 비트맵도 추천될 수 있도록 하기 위함입니다.
      </Paragraph>

      <Title level={4}>
        Q: 예상 점수가 부정확합니다 / BP 확률이 부정확합니다 / ...?
      </Title>
      <Paragraph>
        우리는 계속해서 알고리즘을 개선할 것입니다. 아이디어나 질문이 있으시면, <Link href="https ://discord.gg/H5VzJxeK4F" target="_blank">디스코드</Link>나 <Link href="https://jq.qq.com/?_wv=1027&k=uJ8Hv4Ss" target="_blank">QQ 그룹</Link>에 참여해주세요.
      </Paragraph>

      <Title level={2}>
        알고리즘 소개
      </Title>

      <Title level={4}>
        예상 점수 예측
      </Title>
      <Paragraph>
        점수 예측 시스템은 <Text strong>플레이어의 비트맵 점수 분포를 추정하는 데 사용됩니다.</Text> AlphaOsu!는 각 플레이어에 {i('d')}-차원 잠재 벡터 {i('u\\in \\mathbb R^d')}를 할당하고, 각 비트맵에 {i('d')}-차원 잠재 벡터 {i('v\\in \\mathbb R^d')}를 할당하여, 플레이어의 모든 측면의 강도와 비트맵의 모든 측면의 난이도를 각각 인코딩합니다. 알려진 {i('\\text{score}')}가 주어지면, <Link href="https://sifter.org/~simon/journal/20061211.html" target="_blank">잠재 요소 모델</Link>을 활용하여 {i('u')}와 {i('v')}를 풀 수 있습니다:
        {l('u^\\top W v=\\text{score},')} where {i('W\\in\\mathbb R^{d\\times d}')} is a {i('d\\times d')} diagonal matrix representing a context matrix. In AlphaOsu!, context matrix is defined to be the game mod. Each mod corresponds to a matrix, for example, {i('W_{\\text{HT}}')}, {i('W_{\\text{NM}}')} and {i('W_{\\text{DT}}')}.
      </Paragraph>
      <Paragraph>
        수렴을 가속화하기 위해, AlphaOsu!는 <Link href="https://www.jmlr.org/papers/volume16/hastie15a/hastie15a.pdf" target="_blank">Alternating Least Squares</Link>를 활용하여 {i('u')}, {i('v')} 및 {i('W')}를 최적화합니다, 즉, 세 번째 변수를 최적화하기 위해 두 변수를 고정하고, 최소제곱법을 사용하여 세 번째 변수를 최적화합니다. 이 과정을 반복하여 {i('u')}, {i('v')} 및 {i('W')}를 각각 최적화하여 알고리즘이 수렴할 때까지 반복합니다.
      </Paragraph>


      <Title level={4}>
        점수 변동 예측
      </Title>
      <Paragraph>
        {i('\\hat s=u^\\top W v')}를 예상 점수로 정의합니다. 실제로, 비트맵 하나에 대한 단일 점수를 예측하는 것보다, 플레이어의 비트맵 점수 분포를 <Text strong>예측하는 것</Text>에 더 관심이 있습니다. 이는 플레이어의 점수가 변동되기 때문에, 동일한 비트맵을 여러 번 플레이하면 다른 점수가 나오기 때문입니다. 분포를 예측하기 위해, 일반적인 최소제곱법을 베이지안 최소제곱법(즉, <Link href="https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.27.9072&rep=rep1&type=pdf" target="_blank">베이지안 리지 회귀</Link>)으로 대체할 수 있습니다. 베이지안 리지 회귀는 우리에게 최종적으로 점수 분포를 나타내는 가우스 분포를 추정하는 베이지안 모델을 얻을 수 있게 해줍니다, 즉:
        {l('\\text{score}\\sim \\mathcal N(\\cdot\\mid\\hat s, \\hat\\sigma^2),')}
        여기서 {i('\\hat\\sigma^2')}는 베이지안 리지 회귀가 입력 벡터 {i('u')}, {i('v')} 및 행렬 {i('W')}에 대해 예측한 점수의 분산입니다. 이 분포를 사용하여, 플레이어의 실제 점수가 {i('s_0')}인 경우 <Text strong>기록 갱신 확률</Text>을 예측할 수 있습니다:
        {l('P(\\text{score}>s_0)=\\int_{s=s_0}^{\\infty}\\mathcal N(s\\mid \\hat s, \\hat\\sigma^2) \\text{d}s')}
      </Paragraph>

      <Title level={4}>
        평균 PP 증가 예측
      </Title>
      <Paragraph>
        플레이어가 비트맵에서 얻을 수 있는 PP 증가를 예측하기 위해, 점수 {i('\\hat s')}에 해당하는 PP를 직접 계산하고, 총 PP 증가량을 계산할 수 있습니다. 그러나, 이 방법은 항상 {i('\\hat s')}가 실제 점수보다 작을 때, 차이가 작더라도 총 PP 증가량이 0이 됩니다. 이는 추천 시스템의 안정성을 해칩니다. 따라서, 플레이어 점수 분포를 추정할 수 있다는 것을 고려하여, 기록 갱신 상황에서의 평균 단일 PP를 예측할 수 있습니다:
        {l('\\mathbb E_{s|s>x_0}[\\text{pp}(s)]=\\frac{\\int_{s=s_0}^{\\infty}\\text{pp}(s)\\mathcal N(s\\mid \\hat s, \\hat\\sigma^2)  \\text{d}s}{\\int_{s=s_0}^{\\infty}\\mathcal N(s\\mid \\hat s, \\hat\\sigma^2) \\text{d}s},')}
        여기서 {i('\\text{pp}(s)')}는 점수 {i('s')}에 해당하는 PP입니다. 따라서, 통과할 때 얻을 수 있는 평균 PP는:
        {l('\\mathbb E_{s}[\\text{pp}(s)]=\\mathbb E_{s|s>x_0}[\\text{pp}(s)]\\cdot P(s>s_0)=\\int_{s=s_0}^{\\infty}\\text{pp}(s)\\mathcal N(s\\mid \\hat s, \\hat\\sigma^2)  \\text{d}s')}
      </Paragraph>

      <Title level={4}>
        통과 확률 예측
      </Title>
      <Paragraph>
        평균 PP를 예측하는 것만으로는 충분하지 않습니다, 이는 플레이어가 통과할 확률이 매우 어려운 비트맵에서도 작기 때문입니다. 그러나, 통과 데이터(양성 샘플)만 수집할 수 있고, 통과하지 못한 데이터(음성 샘플)는 누락됩니다. 누락된 데이터에 대해서는, 플레이어가 비트맵을 플레이하지 않았는지, 아니면 플레이어가 비트맵을 통과하지 못했는지를 판단하기 어렵습니다. 또한, 누락된 데이터의 수는 양성 샘플의 수보다 훨씬 많기 때문에, 불균형 샘플 문제가 발생합니다. 음성 샘플을 얻기 위해, AlphaOsu!는 먼저 비트맵의 예상 점수 {i('\\hat s')}가 플레이어의 BP 목록에 들어갈 만큼 충분하지만 플레이어가 그 점수를 가지고 있지 않다면, 플레이어가 이 비트맵을 통과하지 못했음을 가정합니다. 이 가정을 사용하여, 각 플레이어에 대해 고품질의 음성 샘플(PP가 충분히 높은)을 추출할 수 있습니다.
      </Paragraph>
      <Paragraph>
        AlphaOsu!는 <Link href="https://arxiv.org/pdf/1603.02754.pdf" target="_blank">XGBoost</Link>를 통과 확률 예측 모델로 사용합니다. 입력 특성은 플레이어 벡터 {i('u')}, 비트맵 벡터 {i('v')}, 모드, 비트맵의 난이도 별점, 길이, 오브젝트 수, 통과율, 플레이 횟수 등이 포함됩니다.
      </Paragraph>
      <Paragraph>
        플레이 횟수(PC)의 수는 중요합니다. 일부 새로운 비트맵의 경우, PC 수가 낮고 BP 진입 수가 낮아 예측된 통과 확률이 낮습니다. 이 문제는 추천 시스템의 (<Link href="https://www.cs.cornell.edu/people/tj/publications/joachims_etal_05a.pdf" target="_blank">position bias</Link>) 문제와 유사합니다. 이 문제를 해결하기 위해, PC는 훈련 중 모델의 입력 특성 중 하나로 사용될 수 있습니다. 예측 시, 새로운 비트맵(PC가 낮은 경우)의 경우, PC를 임계값으로 증가시켜 이 편향을 보정합니다.
      </Paragraph>

      <Title level={4}>
        PP 증가 잠재력
      </Title>
      <Paragraph>
        PP 증가 잠재력은 통과 확률에 통과 확률을 곱한 값으로 정의됩니다. 이는 비트맵이 PP를 얻을 수 있는 잠재력을 측정합니다.
      </Paragraph>

      <Title level={2}>
        다른 응용
      </Title>
      <Title level={4}>
        플레이어 유사도
      </Title>
      <Paragraph>
      각 선수의 다차원적 능력은 벡터 {i('u')}로 모델링됩니다. 따라서 두 선수의 유사도는 벡터 간의 유클리드 거리를 사용하여 계산할 수 있습니다:
        {l('\\text{similarity}(u_1, u_2)=-||u_1-u_2||_2')}
      </Paragraph>

      <Title level={4}>
        기타타
      </Title>
      <Paragraph>
        다음에 계속...
      </Paragraph>

    </Typography>
  );
}
