$("#add_user").submit(function (event) {
  alert("Data Inserted Successfully!");
});

if (window.location.pathname == "/") {
  $ondelete = $("a.hapus");
  $ondelete.click(function () {
    var product = $(this).attr("data-id");

    var request = {
      url: `http://localhost:3000/api/detail/${product}`,
      method: "DELETE",
    };

    if (confirm("Do you really want to delete this record?")) {
      $.ajax(request).done(function (response) {
        alert("Data Deleted Successfully!");
        location.reload();
      });
    }
  });
}
