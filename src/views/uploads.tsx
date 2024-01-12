import { useEffect } from 'react'
import { APIS } from 'constant/apis'
import useGet from 'hooks/useGet'
import ImageComponent from 'components/Image'
import { MainContianer, ImagesContainer } from 'styles/views/uploads'

const Uploads = () => {
  const { refetch, data } = useGet('latest-uploads', `${APIS.GET_ALL_IMAGES}`)

  useEffect(() => {
    refetch()
  }, [])

  return (
    <MainContianer>
      {data?.data.length ? (
        data?.data?.map((item: any) => {
          return (
            <ImagesContainer key={item?._id}>
              <ImageComponent src={item?.fileLink} />
            </ImagesContainer>
          )
        })
      ) : (
        <div>No data found</div>
      )}
    </MainContianer>
  )
}

export default Uploads
