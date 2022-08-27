import { useAppDispatch, useAppSelector } from 'hooks';
import { resetPassword } from 'store/user/thunk';
import { Form } from 'components/AntDesign';

import { FormModel, Loader } from 'shared/components';
import fieldsRenderProps from 'shared/objects/FormsFields';

function ResetPasswordForm() {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.user);
  const { resetPasswordForm } = fieldsRenderProps;

  const onFinish = ({ password }) => {
    dispatch(resetPassword({ password }));
  };

  resetPasswordForm.onFinish = onFinish;

  return (
    !isLoading ? (
      <div className="auth-container-reset">
        <FormModel form={form} fieldRenderProps={resetPasswordForm} />
      </div>
    ) : <Loader />
  );
}
export default ResetPasswordForm;
