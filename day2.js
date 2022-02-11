
let student = [{
    name:"A",
    score:100,
    Category: 'good',
},
student2 = {
    name:"B",
    score:50,
    Category: 'medium',
},
student3 = {
    name:"C",
    score:20,
    Category: 'weak',
}]
function classtifyStudent(array) {
    console.log('\n   Học sinh giỏi:')
    array.forEach(value => {
        if ( value.Category==='good'){
            console.log(`   + ${value.name}, Lớp: ${value.score}`)
        }
    });
    console.log('\n   Học sinh khá:')
    array.forEach(value => {
        if ( value.Category==='medium'){
            console.log(`   + ${value.name}, Lớp: ${value.score}`)
        }
    });
    console.log('\n   Học sinh yếu:')
    array.forEach(value => {
        if ( value.Category==='weak'){
            console.log(`   + ${value.name}, Lớp: ${value.score}`)
        }
    });
}
    console.log('\n   Danh sách học sinh:')
    student.forEach(value => {
        console.log(`   + ${value.name}, Lớp: ${value.score}, Xếp loại: ${value.Category}`)
    });
    classtifyStudent(student);

    studentlist [0].Category = 'good';
    console.log('\n   Danh sách học sinh sau khi đã cập nhật xêp:')
    student.forEach(value => {
        console.log(`   + ${value.name}, Lớp: ${value.score}, Xếp loại: ${value.Category}`)
    });
    classtifyStudent(student);
