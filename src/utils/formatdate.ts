export default function getFormattedDate(dateString: string): string {
  console.log(dateString);
  return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}
