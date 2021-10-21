var KTFormControls = function() {
	var provider_validation = (function() {
		FormValidation.formValidation(document.getElementById("add_provider_form"), {});

		return {
			// public functions
			init: function() {
				provider_validation();
			},
		};
	})();

	jQuery(document).ready(function() {
		KTFormControls.init();
	});
};

let test = function(fn) {
	let _result = "Ok";

	for (i = 0; i < defaults.data.length; i++) {
		let obj = defaults.data[i];
		if (obj.active == 1 && obj.isEdit == 1 && obj.isRequired == 1) {
			let _val =
				$("#" + obj.id).val() ||
				$("#" + obj.id)
					.children("option:selected")
					.val();
			if (_val == "") {
				_result = obj.messageError;
				break;
			}
		}
	}
	if (fn != undefined) {
		if (_result == "Ok") setTimeout(fn(), 100);
		else alert(_result);
	} else {
		return _result;
	}
};
