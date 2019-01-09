//Switch Case

let friend;

switch(friend) {
    case: 
        whatever
        break;
    case:
        whatever
        break;
    case:
        whatever
        break;
    default:
        whatever
}

let dessert = "Cake";

switch (dessert) {  //.toLowerCase() property-why does it shift to always saying "not on the menu"
    case 'Pie':
    console.log('Pie pie me oh my')
    break;
    case 'Cake':
    console.log('Cake is great')
    break;
    case 'Ice cream':
    console.log('I scream for ice cream')
    break;
    default:
    console.log('Not on the menu')
}//revisit!!

let range = -8
switch (true) {
    case (range < 0 && range > -10):
        console.log('worked')
        break;
    case range >= 0 || range <= -10:
        console.log('also worked')
        break;
}