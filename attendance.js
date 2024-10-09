const classRoom = {
    hasTeachingAssistant:false,
    classList: ["Arun", "Belmont", "Kovendan", "Vazhmuni", "Sivaraman", "Mankandan", "Balaji", "John", "Nandhini", "Kamatchi"],
};

function getStudents(classRoom) {
    const { hasTeachingAssistant, classList } = classRoom;

    if (hasTeachingAssistant) {
        var [,,...rest] = classList
    }
    else { 
        var [,...rest] = classList
    }
    return rest
}
console.log(getStudents(classRoom))