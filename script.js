class Student {
    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;         // مصفوفة تحتوي على درجات 3 مواد
        this.attendance = attendance; // نسبة الحضور (مئوية)
    }

    // 2. دوال التحليل الأكاديمي (Methods)
    
    // دالة حساب المتوسط باستخدام reduce
    calculateAverage() {
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    }

    // دالة التقدير بناءً على المتوسط (if/else)
    calculateGrade(average) {
        if (average >= 90) return 'A';
        if (average >= 80) return 'B';
        if (average >= 70) return 'C';
        if (average >= 60) return 'D';
        if (average >= 50) return 'E';
        return 'F';
    }

    // دالة النتيجة النهائية باستخدام الشرطين معا (&&)
    checkStatus(average, attendance) {
        if (average >= 50 && attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}

// 3. نظام تشغيل الجامعة (Objects Array)
const studentsList = [
    new Student(101, "أحمد محمد", [88, 92, 90], 85),
    new Student(102, "محمود علي", [42, 45, 46], 80), // متعثر (المتوسط ~44.33)
    new Student(103, "فاطمة أحمد", [70, 65, 72], 60), // حضور أقل من 75
    new Student(104, "سارة حسن", [44, 48, 43], 90)   // متعثرة (المتوسط ~45)
];

// 5. المخرجات (Console Logging) - تقرير لكل طالب في المصفوفة الرئيسية
console.log("=== تقارير النظام الأكاديمي للطلاب ===");
studentsList.forEach(student => {
    const avg = student.calculateAverage();
    const grade = student.calculateGrade(avg);
    const status = student.checkStatus(avg, student.attendance);
    console.log(`الاسم: ${student.name} | المتوسط: ${avg.toFixed(2)} | التقدير: ${grade} | النتيجة: ${status}`);
});

// 4. لجنة الرأفة (Array Methods)

// أ. الاستخراج: استخدام filter لاستخراج الطلاب الذين تتراوح متوسطاتهم بين 40 و 49
const strugglingStudents = studentsList.filter(student => {
    const avg = student.calculateAverage();
    return avg >= 40 && avg < 50;
});

// ب. المعالجة: استخدام map لإضافة 5 درجات رأفة لمتوسطاتهم
const adjustedStruggling = strugglingStudents.map(student => {
    const originalAvg = student.calculateAverage();
    const newAvg = Math.min(100, originalAvg + 5); // درع حماية لعدم تجاوز 100
    return {
        id: student.id,
        name: student.name,
        originalAverage: originalAvg.toFixed(2),
        newAverage: newAvg.toFixed(2),
        statusAfterMercy: newAvg >= 50 && student.attendance >= 75 ? "ناجح بالرأفة" : "يحتاج مراجعة"
    };
});

// ج. التحليل: استخدام reduce لجمع المتوسطات الجديدة بعد التعديل
const totalAdjustedAverages = adjustedStruggling.reduce((sum, student) => {
    return sum + parseFloat(student.newAverage);
}, 0);

// د. متوسط الرأفة مع "درع حماية" لمنع القسمة على صفر في حال خلو المصفوفة
const averageAfterMercy = adjustedStruggling.length > 0 
    ? (totalAdjustedAverages / adjustedStruggling.length).toFixed(2) 
    : 0;

// 5. المخرجات (Console Logging) الخاصة بلجنة الرأفة
console.log("\n=== تققير لجنة الرأفة للطلاب المتعثرين ===");
console.table(adjustedStruggling);

console.log(`المتوسط العام للطلاب المتعثرين بعد تطبيق درجات الرأفة: ${averageAfterMercy}`); 
