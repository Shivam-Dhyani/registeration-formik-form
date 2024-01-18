import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";

function RegisterationForm() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    mobileNo: yup
      .number()
      .typeError("Mobile number must be a number")
      .min(10, "Mobile number must be at least 10 digits")
      .required("Mobile number is required"),
    dob: yup.date("Invalid date format").required("Date is required"),
    city: yup.string().required("City is required"),
    shopName: yup.string().required("Shop Name is required"),
    empCode: yup.string().required("Employee/Referral Code is required"),
    applyFor: yup
      .string()
      .required("Select a role")
      .oneOf(["2", "3", "4", "9"], "Invalid role"),
    pan: yup.string().required("PAN is required"),
    addhar: yup.string().required("Aadhar is required"),
    panPhoto: yup.mixed().required("PAN photo is required"),
    addharPhoto: yup.mixed().required("Aadhar photo is required"),
    pincode: yup.string().required("Pincode is required"),
    state: yup.string().required("State is required"),
    address: yup.string().required("Address is required"),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
      initialValues={{
        name: "",
        email: "",
        mobileNo: "",
        dob: "",
        city: "",
        shopName: "",
        empCode: "",
        applyFor: "",
        pan: "",
        addhar: "",
        panPhoto: "",
        addharPhoto: "",
        pincode: "",
        state: "",
        address: "",
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <div className="container" style={{ backgroundColor: "white" }}>
          <div className="row align-items-top justify-content-between pt-5 pt-sm-5 pt-md-5">
            <div className="card-body px-md-5 py-5">
              <div className="mb-5">
                <h5 className="h3">Register With Us</h5>
                <p className="text-muted mb-0">
                  Register now and feel, Nxt generation banking.
                </p>
              </div>
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik101"
                    className="position-relative"
                  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter Name"
                      value={values.name}
                      onChange={handleChange}
                      isValid={touched.name && !errors.name}
                    />
                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                    <formik.ErrorMessage name="name">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </formik.ErrorMessage>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik102"
                    className="position-relative"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      placeholder="Enter Email"
                      value={values.email}
                      onChange={handleChange}
                      isValid={touched.email && !errors.email}
                    />
                    <formik.ErrorMessage name="email">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </formik.ErrorMessage>
                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik101"
                    className="position-relative"
                  >
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                      type="number"
                      name="mobileNo"
                      placeholder="Enter Mobile No."
                      value={values.mobileNo}
                      onChange={handleChange}
                      isValid={touched.mobileNo && !errors.mobileNo}
                    />
                    <formik.ErrorMessage name="mobileNo">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </formik.ErrorMessage>
                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik102"
                    className="position-relative"
                  >
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      name="dob"
                      placeholder="dd-mm-yyyy"
                      value={values.dob}
                      onChange={handleChange}
                      isValid={touched.dob && !errors.dob}
                    />
                    <formik.ErrorMessage name="dob">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </formik.ErrorMessage>
                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik101"
                    className="position-relative"
                  >
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      placeholder="Enter City"
                      value={values.city}
                      onChange={handleChange}
                      isValid={touched.city && !errors.city}
                    />
                    <formik.ErrorMessage name="city">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </formik.ErrorMessage>
                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik102"
                    className="position-relative"
                  >
                    <Form.Label>Shop Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="shopName"
                      placeholder="Enter Shop Name"
                      value={values.shopName}
                      onChange={handleChange}
                      isValid={touched.shopName && !errors.shopName}
                    />
                    <formik.ErrorMessage name="shopName">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </formik.ErrorMessage>
                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik101"
                    className="position-relative"
                  >
                    <Form.Label>EMP / Referral Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="empCode"
                      placeholder="Enter Code"
                      value={values.empCode}
                      onChange={handleChange}
                      isValid={touched.empCode && !errors.empCode}
                    />
                    <formik.ErrorMessage name="empCode">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </formik.ErrorMessage>
                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik102"
                    className="position-relative"
                  >
                    <Form.Label>Apply For</Form.Label>
                    <select
                      name="applyFor"
                      className="form-control select"
                      type="select"
                      placeholder="Select Role"
                      value={values.applyFor}
                      onChange={handleChange}
                    >
                      <option value="">Select Role</option>
                      <option value="2">Master Distributor</option>
                      <option value="3">Distributor</option>
                      <option value="4">Retailer</option>
                      <option value="9">Whitelabel</option>
                    </select>
                    <formik.ErrorMessage name="applyFor">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </formik.ErrorMessage>
                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik101"
                    className="position-relative"
                  >
                    <Form.Label>PAN</Form.Label>
                    <Form.Control
                      type="text"
                      name="pan"
                      placeholder="Enter PAN"
                      value={values.pan}
                      onChange={handleChange}
                      isValid={touched.pan && !errors.pan}
                    />
                    <formik.ErrorMessage name="pan">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </formik.ErrorMessage>
                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik102"
                    className="position-relative"
                  >
                    <Form.Label>Addhar</Form.Label>
                    <Form.Control
                      type="text"
                      name="addhar"
                      placeholder="Enter Addhar"
                      value={values.addhar}
                      onChange={handleChange}
                      isValid={touched.addhar && !errors.addhar}
                    />
                    <formik.ErrorMessage name="addhar">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </formik.ErrorMessage>
                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik101"
                    className="position-relative"
                  >
                    <Form.Label>PAN</Form.Label>
                    <Form.Control
                      type="file"
                      required
                      name="panPhoto"
                      onChange={handleChange}
                      isInvalid={!!errors.panPhoto}
                    />
                    <formik.ErrorMessage name="panPhoto">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </formik.ErrorMessage>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik102"
                    className="position-relative"
                  >
                    <Form.Label>Addhar</Form.Label>
                    <Form.Control
                      type="file"
                      required
                      name="addharPhoto"
                      onChange={handleChange}
                      isInvalid={!!errors.addharPhoto}
                    />
                    <formik.ErrorMessage name="addharPhoto">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </formik.ErrorMessage>
                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik101"
                    className="position-relative"
                  >
                    <Form.Label>Pincode</Form.Label>
                    <Form.Control
                      type="number"
                      name="pincode"
                      placeholder="Enter Pincode"
                      value={values.pincode}
                      onChange={handleChange}
                      isValid={touched.pincode && !errors.pincode}
                    />
                    <formik.ErrorMessage name="pincode">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </formik.ErrorMessage>
                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik102"
                    className="position-relative"
                  >
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      name="state"
                      placeholder="Enter State"
                      value={values.state}
                      onChange={handleChange}
                      isValid={touched.state && !errors.state}
                    />
                    <formik.ErrorMessage name="state">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </formik.ErrorMessage>
                    <Form.Control.Feedback tooltip>
                      Looks good!
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationFormik103"
                    className="position-relative"
                  >
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Address"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      isInvalid={!!errors.address}
                    />
                    <formik.ErrorMessage name="address">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </formik.ErrorMessage>
                  </Form.Group>
                </Row>
                <Button type="submit">Submit form</Button>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default RegisterationForm;
