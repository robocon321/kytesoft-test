export default function Logo(props: any) {
  return (
    <div>
        <img width={92} height={22} src={props.isNonTop ? "/images/main-logo-black.png" : "/images/main-logo.png"} alt="Not found" />
    </div>
  )
}
