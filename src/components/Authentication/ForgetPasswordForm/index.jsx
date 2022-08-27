import { Link } from 'react-router-dom';

import { useAppDispatch } from 'hooks';
import { forgetPassword } from 'store/user/thunk';
import { Text, Form } from 'components/AntDesign';
import FormModel from 'shared/components/Form';
import fieldRenderProps from 'shared/objects/FormsFields';

export default function ForgetPasswordForm() {
  const [form] = Form.useForm();

  const dispatch = useAppDispatch();
  const { forgetPasswordForm } = fieldRenderProps;

  const onFinish = async (email) => dispatch(forgetPassword(email));

  forgetPasswordForm.onFinish = onFinish;

  return (
    <div className="auth-container-forget">
      <FormModel form={form} fieldRenderProps={forgetPasswordForm} />

      <Text className="have-account-text">
        Remember it?
        <Link to="/" className="sign-in-link">Sign in.</Link>
      </Text>
    </div>

  );
}
