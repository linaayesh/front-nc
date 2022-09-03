import { ComponentLayout } from 'layouts';
import { DashboardSettings } from 'components';

function DashboardSettingsPage() {
  return (
    <ComponentLayout title="Dashboard Settings" heading="Update Your Dashboard Settings">
      <DashboardSettings />
    </ComponentLayout>
  );
}

export default DashboardSettingsPage;
