import ContentLoader, { IContentLoaderProps } from "react-content-loader"

const BaseDropdownLoader: React.FC<IContentLoaderProps> = (props) => (
  <ContentLoader width={150} height={90} viewBox="0 0 150 40" backgroundColor="#f0f0f0" foregroundColor="#dedede" {...props}>
    <rect x="0" y="2" width="2" height="40" />
    <rect x="0" y="2" width="148" height="2" />
    <rect x="0" y="38" width="148" height="2" />
    <rect x="148" y="2" width="2" height="40" />
    <rect x="16" y="17" width="70" height="8" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" transform="translate(116 9)" />
  </ContentLoader>
)

export default BaseDropdownLoader
