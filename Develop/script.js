
$(function () {
    var today = dayjs();
    $("#currentDay").text(today.format("dddd, MMMM D"));
    var currentHour = dayjs().hour();
    console.log(currentHour);
    var buttons = $(".btn.saveBtn");
    var textArea = $(".description");
    textArea.each(function () {
      var noteToFind = $(this).parent().attr("id");
      console.log(noteToFind);
      var noteToDisplay = localStorage.getItem(noteToFind);
      console.log(noteToDisplay);
      $(this).val(noteToDisplay);
    });
    buttons.on("click", function () {
        var noteSaved = $(this).siblings("textarea")[0].value;
        var key = this.parentElement.id;
        localStorage.setItem(key, noteSaved);
      });
      function colorBlocks() {
        $(".time-block").each(function () {
          var blockId = $(this).attr("id");
          blockId = blockId.substring(5)
          blockId = parseInt(blockId)
          console.log(blockId)
          console.log(blockId,currentHour)
          if (currentHour > blockId) {
            $(this).addClass("past");
          } else if (currentHour === blockId) {
            $(this).addClass("present");
          } else {
            $(this).addClass("future");
          }
        });
      }
      colorBlocks()
    });

