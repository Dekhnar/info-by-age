import ContentLoader from "react-content-loader"

const UserInformationNameListLoader = (props: any) => (
  <ContentLoader
    speed={2}
    width={"100%"}
    height={"100%"}
    viewBox="0 0 400 320"
    backgroundColor="#e0e0e0"
    foregroundColor="#cecece"
    {...props}
  >
    <rect x="24" y="4" rx="5" ry="5" width="88%" height="20" />
    <rect x="24" y="38" rx="5" ry="5" width="88%" height="20" />
    <rect x="24" y="73" rx="5" ry="5" width="88%" height="20" />
    <rect x="24" y="108" rx="5" ry="5" width="88%" height="20" />
    <rect x="24" y="144" rx="5" ry="5" width="88%" height="20" />
    <rect x="24" y="178" rx="5" ry="5" width="88%" height="20" />
    <rect x="24" y="213" rx="5" ry="5" width="88%" height="20" />
    <rect x="24" y="248" rx="5" ry="5" width="88%" height="20" />
    <rect x="24" y="280" rx="5" ry="5" width="88%" height="20" />
  </ContentLoader>
)

export default UserInformationNameListLoader
