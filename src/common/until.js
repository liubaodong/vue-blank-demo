// 上传图片
export function _upImgs(file) {
    return new Promise((resolve, reject) => {
        if (file && file.type !== 'image/jpeg') reject('格式不对哦, 格式:(image/jpeg)')
        let baseSize = 20000;
        //  if (file.size > baseSize) reject('请上传小于2M的图片')
        let reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
            resolve(reader.result)
            console.log(reader)

        }
    })

}