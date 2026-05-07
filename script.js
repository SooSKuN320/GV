shareBtn.onclick = () => {
  const siteUrl = "https://sooskun320.github.io/GV/";

  const text =
`${state.nickname} はGV学力テストで${score}/150点！称号は「${rank}」でした！
${siteUrl}
#GV学力テスト`;

  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
};
