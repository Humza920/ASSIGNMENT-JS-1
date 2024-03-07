var english = document.querySelector("#first")
var chemistry = document.querySelector("#second")
var physics = document.querySelector("#third")
var math = document.querySelector("#fourth")
var bio = document.querySelector("#fifth")
var islamiyat = document.querySelector("#sixth")
var total = document.querySelector("#total")
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

    total.innerHTML=("TOTAL-MARKS " + "=" + totalMarks ) 

    var obtainedMarks =(+english.value + +chemistry.value + +physics.value + +math.value + +bio.value + +islamiyat.value) 
    console.log(obtainedMarks);

    studendGain.innerHTML=("OBTAINED-MARKS " + "= " + obtainedMarks)

    var student =(obtainedMarks/totalMarks*100)

    studentPercentage=("PERCENTAGE " + "= " + student + "%")
    
    percentage.innerHTML=studentPercentage

    console.log(studentPercentage);

    if (student>=50 && student<=60) {
        grade.innerHTML=("GRADE" + "= " + "C" )
    } 
    
    else if (student>=61 && student<=70)
    grade.innerHTML=("GRADE" + "= " + "B" )

    else if (student>=71 && student<=80)
    grade.innerHTML=("GRADE" + "= " + "A" )

    else if (student>=81 && student<=90)
    grade.innerHTML=("GRADE" + "= " + "A-1" )

    else if (student>=91 && student<=98)
    grade.innerHTML=("GRADE" + "= " + "A+" )

    else {grade.innerHTML=("FAIL")        
    }
   
    console.log(grade.innerHTML);
}


