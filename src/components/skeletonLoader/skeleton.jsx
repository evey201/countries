import { SkeletonContainer } from './skeleton.styled'

export const SkeletonElement = ({ type, width, height}) => {
    const classes = `${type}`
    return (
        <>
            <SkeletonContainer width={width} height={height} >dd</SkeletonContainer>
        </>
    );
}
