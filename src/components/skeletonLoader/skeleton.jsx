import { Skeleton } from './skeleton.styled'

export const SkeletonLoader = ({ type }) => {
    const classes = `skeleton ${type}`
    return (
        <>
            <Skeleton className={classes}>
                vcjv
            </Skeleton>
        </>
    );
}
