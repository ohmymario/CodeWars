function domainName(url) {
  let removed = url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "");
  let domain = removed.split(".")[0];
  return domain;
}
