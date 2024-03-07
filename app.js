var english = document.querySelector("#first")
var chemistry = document.querySelector("#second")
var physics = document.querySelector("#third")
var math = document.querySelector("#fourth")
var bio = document.querySelector("#fifth")
var islamiyat = document.querySelector("#sixth")
var studendGain = document.querySelector("#obtained")
var percentage = document.querySelector("#percent")
var grade = document.querySelector("#rank")
function calculator() {

    console.log(english.value);
    console.log(chemistry.value);
    console.log(physics.value);
    console.log(math.value);
    console.log(bio.value);
    console.log(islamiyat.value);

    var totalMarks =(600)
    console.log(totalMarks);

    var obtainedMarks =(+english.value + +chemistry.value + +physics.value + +math.value + +bio.value + +islamiyat.value) 
    console.log(obtainedMarks);

    studendGain.innerHTML=("OBTAINED-MARKS " + "= " + obtainedMarks)

    studentPercentage=("PERCENTAGE " + "= " + obtainedMarks/totalMarks*100)
    
    percentage.innerHTML=studentPercentage

    console.log(studentPercentage);

    if (studentPercentage>=50 && studentPercentage<=60) {
        grade.innerHTML=("GRADE" + "= " + "C" )
    } 
    
    else if (studentPercentage>=61 && studentPercentage<=70)
    grade.innerHTML=("GRADE" + "= " + "B" )

    else if (studentPercentage>=71 && studentPercentage<=80)
    grade.innerHTML=("GRADE" + "= " + "A" )

    else if (studentPercentage>=81 && studentPercentage<=90)
    grade.innerHTML=("GRADE" + "= " + "A-1" )

    else if (studentPercentage>=91 && studentPercentage<=98)
    grade.innerHTML=("GRADE" + "= " + "A+" )

    else {grade.innerHTML=("YOU ENTERED WRONG SUBJECT MARKS")        
    }


}
