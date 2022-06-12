import { SkeletonContainer } from './skeleton.styled'

export const SkeletonElement = ({  width, height}) => {
    return (
        <>
            <SkeletonContainer width={width} height={height} ></SkeletonContainer>
        </>
    );
}
