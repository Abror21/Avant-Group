
import './Department.css'
import DepartmentPhoto from './DepartmentPhoto'
import img1 from '../../images/department-img1.jpg'
import img2 from '../../images/department-img2.jpg'
import img3 from '../../images/department-img3.jpg'
import img4 from '../../images/department-img4.jpg'
import img5 from '../../images/department-img5.jpg'

const Department = () => {
    const style2 = {
        gridColumnStart: 2,
        gridRowStart: 1,
        gridRowEnd: 3
    }
    return (
        <div className='container'>
            <h3 className='default-title department-title'>КОНСТРУКТОРСКОЕ <span>БЮРО</span></h3>
            <div className='department'>
                <DepartmentPhoto
                    title='Мархи'
                    bg={img1}
                />
                <DepartmentPhoto
                    title='Уникальные дизайны'
                    bg={img2}
                    style={style2}
                />
                <DepartmentPhoto
                    title='Ангары'
                    bg={img3}
                />
                <DepartmentPhoto
                    title='Промышленные здания'
                    bg={img4}
                />
                <DepartmentPhoto
                    title='Мархи'
                    bg={img5}
                />
            </div>
        </div>
    )
}

export default Department
