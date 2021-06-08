import RCPagination, { PaginationProps } from "rc-pagination"
import "rc-pagination/assets/index.css"

const BasePagination: React.FC<PaginationProps> = (props) => {
  return <RCPagination {...props} />
}

export default BasePagination
