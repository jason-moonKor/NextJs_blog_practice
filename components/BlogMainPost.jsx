import {Card, Col, Row} from "antd";
import Link from "next/link";

export default function BlogMainPost({slug, thumbnail}) {
	return (
		<Row
			align="middle"
			style={{
				height: "auto"
			}}
		>
			<Col span={24}>
				<Link href={`/post/${slug}`}>
					<a>
						<Card
							cover={<img alt={thumbnail.alt} src={thumbnail.imageUrl} />}
						></Card>
					</a>
				</Link>
			</Col>
		</Row>
	);
}
