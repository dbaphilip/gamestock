export default function cropImage(url: string) {
  const target = "media/";
  const cropUrl = "crop/600/400/";
  const index = url.indexOf(target) + target.length;
  const start = url.slice(0, index);
  const end = url.slice(index);
  return start + cropUrl + end;
}
